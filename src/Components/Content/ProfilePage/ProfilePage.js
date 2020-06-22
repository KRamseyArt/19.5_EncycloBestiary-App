import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './ProfilePage.css'

import ProfileData from './ProfileData/ProfileData';
import BestiaryList from './BestiaryList/BestiaryList';

export class ProfilePage extends Component {
  render() {
    return (
      <div id="ProfilePage">
        <ProfileData />
        <BestiaryList />
      </div>
    )
  }
}

export default ProfilePage
