import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './LogInPage.css'

export class LogInPage extends Component {
  render() {
    return (
      <form id="LogIn-Form">
        <fieldset>
          <legend>Log-In</legend>
          <p>Sign into your existing account</p>
          
          <br/>
          
          <label htmlFor="username">Username:</label>
          <br/>
          <input
            type="text"
            id="username"
            name="username"
            className="account-input"
          />

          <br/>
          
          <label htmlFor="password">Password:</label>
          <br/>
          <input
            type="password"
            id="password"
            name="password"
            className="account-input"
          />

          <br/>
          <br/>

          <Link
            to={"/users/:userId"}
          >
            <input
              type="submit"
              value="Submit"
              id="login-button"
            />
          </Link>
          
        </fieldset>
      </form>
    )
  }
}

export default LogInPage
