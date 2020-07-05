import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';

import STORE from '../../STORE';

import './Content.css';
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


export class Content extends Component {
  state = {
    user: {},
    bestiaries: [],
    data: [],
  }

  componentDidMount() {
    const store = STORE;

    this.setState({
      user: store.users[0],
      bestiaries: store.bestiaries.filter(b =>
        b.user_id === store.users[0].id),
      data: store.bestiary_data.filter(d =>
        d.user_id === store.users[0].id)
    })
  }

  activateUser = (user) => {
    this.setState({
      user
    })
  }

  addBestiary = (bestiary) => {
    this.setState({
      bestiaries: [...this.state.bestiaries, bestiary]
    })
  }

  deleteBestiary = (bestiaryId) => {
    this.setState({
      bestiaries: this.state.bestiaries.filter(b =>
        b.id !== bestiaryId)
    })
  }

  addData = (data) => {
    this.setState({
      data: [...this.state.data, data]
    })
  }

  deleteData = (dataId) => {
    this.setState({
      data: this.state.data.filter(d =>
        d.id !== dataId)
    })
  }
  
  render() {
    const state = this.state;
    console.log(this.state);
    
    const contextValue = {
      user: state.user,
      bestiaries: state.bestiaries,
      data: state.data,
      activateUser: this.activateUser,
      addBestiary: this.addBestiary,
      deleteBestiary: this.deleteBestiary,
      addData: this.addData,
      deleteData: this.deleteData
    }
    return (
      <Context.Provider
        value={contextValue}
      >
        <content id="Content">
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
          <div id="cushion" />
        </content>
      </Context.Provider>
    )
  }
}

export default Content
