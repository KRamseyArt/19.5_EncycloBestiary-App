import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './ProfileData.css'

export class ProfileData extends Component {
  render() {
    return (
      <nav id="Profile-Data">
        <h3 id="Username">Username</h3>
        <img id="Avatar" src="https://via.placeholder.com/150?text=Profile+Pic" />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae nam dicta harum dignissimos repellendus minus maiores alias illum aspernatur corrupti.</p>
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
