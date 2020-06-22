import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './NavBar.css';

export class NavBar extends Component {
  render() {
    return (
      <nav id="NavBar">
        <div id="Account-Access">
          <Link to={"/sign-up"}>
            <button>Sign Up</button>
          </Link>
          <Link to={"/log-in"}>
            <button>Log In</button>
          </Link>
        </div>
        <div id="Page-Nav">
          <Link to={"/"}>
            <button className="button">Home</button>
          </Link>
        </div>
      </nav>
    )
  }
}

export default NavBar
