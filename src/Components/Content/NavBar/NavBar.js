import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';
import TokenService from '../../../Services/token-service';

export class NavBar extends Component {
  renderAccountLink() {
    return (
      <div id="AccountNav account">
        <Link
          to={`/users/${TokenService.readJwtToken().user_id}`}
        >
          <button className="btn">
            Account
          </button>
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div id="AccountNav login">
        <Link to={'/sign-up'}>
          <button className="btn">
            Sign Up
          </button>
        </Link>
        <div id="spacer"/>
        <Link to ={'/log-in'}>
          <button className="btn">
            Log In
          </button>
        </Link>
      </div>
    );
  }
  
  render() {
    return (
      <nav id="NavBar">
        {TokenService.hasAuthToken()
          ? this.renderAccountLink()
          : this.renderLoginLink()
        }
        
        <div id="PageNav">
          <Link to={"/"}>
            <button className="btn">Home</button>
          </Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
