import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';

import './Content.css';
import Config from '../../Config';

import Context from '../../Context';
import NavBar from './NavBar/NavBar';
import HomePage from './HomePage/HomePage';
import LogInPage from './LogInPage/LogInPage';
import SignUpPage from './SignUpPage/SignUpPage';
import ProfilePage from './ProfilePage/ProfilePage';
import Bestiary from './ProfilePage/BestiaryList/BestiaryCard/Bestiary/Bestiary';
import AddDataForm from './ProfilePage/BestiaryList/BestiaryCard/Bestiary/DataList/DataListHeader/AddDataForm/AddDataForm';
import AddBestiaryForm from './ProfilePage/BestiaryList/AddBestiaryForm/AddBestiaryForm';
import NotFoundPage from './NotFoundPage/NotFoundPage';

import IdleService from '../../Services/idle-service'
import TokenService from '../../Services/token-service'


export class Content extends Component {
  state = {
    userToken: "",
    user: {},
    bestiaries: [],
    activeBestiaryID: null,
    data: [],
    hasError: false
  }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  componentDidMount(){
    IdleService.setIdleCallback(this.logoutFromIdle)

    if (TokenService.hasAuthToken()){
      IdleService.registerIdleTimerResets()
      this.handleSuccessfulLogin()
    }

    // TokenService.queueCallbackBeforeExpiry(() => {
    //   AuthApiService.postRefreshToken()
    // })
  }

  componentWillUnmount() {
    IdleService.unRegisterIdleResets()
    TokenService.clearCallbackBeforeExpiry()
  }

  logoutFromIdle = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()

    this.forceUpdate()
  }

  setUser = (user) => {
    this.setState({
      userToken: user ? TokenService.getAuthToken() : TokenService.clearAuthToken(),
      user: user
    })
  }

  setBestiaries = (bestiaries) => {
    this.setState({
      bestiaries
    })
  }
  addBestiary = (bestiary) => {
    this.setState({
      bestiaries: [...this.state.bestiaries, bestiary]
    })
  }
  deleteBestiary = (bestiaryId) => {
    fetch (`${Config.API_ENDPOINT}/bestiaries/${bestiaryId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res => {
        this.setState({
          bestiaries: this.state.bestiaries.filter(b =>
            b.id !== bestiaryId)
        })
      })
      .catch(error => {
        console.error(error)
      })
  }
  setActiveBestiaryID = (bestiaryId) => {
    this.setState({
      activeBestiaryID: bestiaryId
    })
  }

  setData = (data) => {
    this.setState({
      data
    })
  }
  addData = (data) => {
    this.setState({
      data: [...this.state.data, data]
    })
  }
  deleteData = (dataId) => {
    fetch (`${Config.API_ENDPOINT}/data/${dataId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res => {
        this.setState({
          data: this.state.data.filter(d =>
            d.id !== dataId)
        })
      })
      .catch(error => {
        console.error(error)
      })
  }

  handleSuccessfulLogin = () => {
    if (TokenService.hasAuthToken()){
      const ENDPOINT = Config.API_ENDPOINT;
    
      Promise.all([
        fetch(`${ENDPOINT}/users/${TokenService.readJwtToken().user_id}`),
        fetch(`${ENDPOINT}/users/${TokenService.readJwtToken().user_id}/bestiaries`),
        fetch(`${ENDPOINT}/users/${TokenService.readJwtToken().user_id}/data`),
      ])
        .then(([userRes, bestiariesRes, dataRes]) => {
          if(!userRes.ok){
            return userRes.json().then(e => Promise.reject(e))
          }
          if(!bestiariesRes.ok){
            return bestiariesRes.json().then(e => Promise.reject(e))
          }
          if(!dataRes.ok){
            return dataRes.json().then(e => Promise.reject(e))
          }
          return Promise.all([userRes.json(), bestiariesRes.json(), dataRes.json()]);
        })
        .then(([user, bestiaries, data]) => {
          this.setUser(user)
          this.setBestiaries(bestiaries)
          this.setData(data)
        })
        .catch(error => {
          console.error({error});
        })
    }
    
  }
  
  render() {
    const state = this.state;
    
    const contextValue = {
      userToken: state.userToken,
      user: state.user,
      bestiaries: state.bestiaries,
      activeBestiaryID: state.activeBestiaryID,
      data: state.data,
      setUser: this.setUser,
      setBestiaries: this.setBestiaries,
      addBestiary: this.addBestiary,
      deleteBestiary: this.deleteBestiary,
      setActiveBestiaryID: this.setActiveBestiaryID,
      setData: this.setData,
      addData: this.addData,
      deleteData: this.deleteData,
      handleSuccessfulLogin: this.handleSuccessfulLogin
    }
    return (
      <Context.Provider
        value={contextValue}
      >
        <section id="Content">
          <NavBar />

          <Switch>
            <Route
              path='/users/:userId/bestiaries/:bestiaryId/add-data'
              component={AddDataForm}
            />

            <Route
              path='/users/:userId/bestiaries/:bestiaryId'
              component={Bestiary}
            />
            <Route
              path='/users/:userId/add-bestiary'
              component={AddBestiaryForm}
            />
            <Route
              path='/users/:userId'
              component={ProfilePage}
            />
            <Route
              path='/sign-up'
              component={SignUpPage}
            />
            <Route
              path='/log-in'
              component={LogInPage}
            />
            <Route
              exact
              path='/'
              component={HomePage}
            />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </section>
      </Context.Provider>
    )
  }
}

export default Content
