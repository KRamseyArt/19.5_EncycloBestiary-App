import React, { Component } from 'react'
import {Switch, Route } from 'react-router-dom';

import './Content.css';
import NavBar from './NavBar/NavBar';
import HomePage from './HomePage/HomePage';
import LogInPage from './LogInPage/LogInPage';
import SignUpPage from './SignUpPage/SignUpPage';
import ProfilePage from './ProfilePage/ProfilePage';
import Bestiary from './ProfilePage/BestiaryList/BestiaryCard/Bestiary/Bestiary';
import AddDataForm from './ProfilePage/BestiaryList/BestiaryCard/Bestiary/DataList/DataListHeader/AddDataForm/AddDataForm';
import AddBestiaryForm from './ProfilePage/BestiaryList/AddBestiaryForm/AddBestiaryForm';


export class Content extends Component {
  render() {
    return (
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
        </Switch>
        <div id="cushion" />
      </content>
    )
  }
}

export default Content
