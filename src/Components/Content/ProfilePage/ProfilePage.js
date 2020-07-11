import React, { Component } from 'react'

import './ProfilePage.css'
import Config from '../../../Config'
import Context from '../../../Context'

import ProfileData from './ProfileData/ProfileData';
import BestiaryList from './BestiaryList/BestiaryList';
import AuthApiService from '../../../Services/auth-api-service';
import TokenService from '../../../Services/token-service';

export class ProfilePage extends Component {
  static contextType = Context;
  
  componentDidMount() {
    const ENDPOINT = Config.API_ENDPOINT;
    
    Promise.all([
      // fetch(`${ENDPOINT}/users/1`),
      // fetch(`${ENDPOINT}/users/1/bestiaries`),
      // fetch(`${ENDPOINT}/users/1/data`),
      fetch(`${ENDPOINT}/users/${TokenService.readJwtToken().user_id}`),
      fetch(`${ENDPOINT}/users/${TokenService.readJwtToken().user_id}/bestiaries`),
      fetch(`${ENDPOINT}/users/${TokenService.readJwtToken().user_id}/data`),
    ])
      .then(([userRes, bestiariesRes, dataRes]) => {
        console.log([userRes, bestiariesRes, dataRes])

        if(!userRes.ok){
          return userRes.json().then(e => Promise.reject(e))
        }
        if(!bestiariesRes.ok){
          return bestiariesRes.json().then(e => Promise.reject(e))
        }
        if(!dataRes.ok){
          return dataRes.json().then(e => Promise.reject(e))
        }
        console.log([userRes, bestiariesRes, dataRes]);
        return Promise.all([userRes.json(), bestiariesRes.json(), dataRes.json()]);
      })
      .then(([user, bestiaries, data]) => {
        console.log([user, bestiaries, data]);
        this.context.setUser(user)
        this.context.setBestiaries(bestiaries)
        this.context.setData(data)
      })
      .catch(error => {
        console.error({error});
      })
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
