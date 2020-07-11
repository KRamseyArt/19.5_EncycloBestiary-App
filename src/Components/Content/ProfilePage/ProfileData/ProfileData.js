import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './ProfileData.css';
import Context from '../../../../Context';
import TokenService from '../../../../Services/token-service';
import IdleService from '../../../../Services/idle-service';

export class ProfileData extends Component {
  static contextType = Context;

  static defaultProps = {
    user: 1
  }
  
  handleLogout = () => {
    console.log('Logging out!')
    this.context.setUser(null);
    TokenService.clearAuthToken()

    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
  }

  render() {
    const { user } = this.context;
    
    return (
      <nav id="Profile-Data">
        <h3 id="Username">{user.username}</h3>
        <img
          id="Avatar"
          src="https://via.placeholder.com/150?text=Profile+Pic"
          alt="User Avatar"  
        />
        <p>({user.about_me})</p>
        <ul id="Profile-Nav">
          <li>
            <Link
              to={"/"}
            >
              <button
                className="btn"
                onClick={() => this.handleLogout()}
              >
                Log Out
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default ProfileData
