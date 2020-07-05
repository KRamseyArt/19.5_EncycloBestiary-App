import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './ProfileData.css';
import Context from '../../../../Context';

export class ProfileData extends Component {
  static contextType = Context;
  
  render() {
    const { user } = this.context;
    
    return (
      <nav id="Profile-Data">
        <h3 id="Username">{user.username}</h3>
        <img id="Avatar" src="https://via.placeholder.com/150?text=Profile+Pic" />
        <p>{user.about_me}</p>
        <ul id="Profile-Nav">
          <li>
            <Link
              to={"/"}
            >
              <button>
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
