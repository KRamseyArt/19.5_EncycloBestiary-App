import React, { Component } from 'react'

import './ProfilePage.css'
import Context from '../../../Context'

import ProfileData from './ProfileData/ProfileData';
import BestiaryList from './BestiaryList/BestiaryList';

export class ProfilePage extends Component {
  static contextType = Context;
  
  componentDidMount() {
    this.context.handleSuccessfulLogin();
  }
  
  render() {
    console.log(this.context)
    const user = this.context.userID;
    const bestiaries = this.context.bestiaries;
    const data = this.context.data;
    console.log([user, bestiaries, data])

    return (
      <div id="ProfilePage">
        <ProfileData />
        <BestiaryList />
      </div>
    )
  }
}

export default ProfilePage
