import React, { Component } from 'react';

import './ProfilePage.css';
import Context from '../../../Context';

import ProfileData from './ProfileData/ProfileData';
import BestiaryList from './BestiaryList/BestiaryList';

export class ProfilePage extends Component {
  static contextType = Context;
  
  componentDidMount() {
    this.context.handleSuccessfulLogin();
  }
  
  render() {
    return (
      <div id="ProfilePage">
        <ProfileData />
        <BestiaryList />
      </div>
    );
  }
}

export default ProfilePage;
