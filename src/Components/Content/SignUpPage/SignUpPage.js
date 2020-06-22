import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './SignUpPage.css'

export class SignUpPage extends Component {
  render() {
    return (
      <form id="SignUp-Form">
        <fieldset>
          <legend>Sign-Up</legend>
          <p>Create a new account</p>
          
          <br/>
          
          <label htmlFor="email">Email:</label>
          <br/>
          <input
            type="email"
            id="email"
            name="email"
            className="account-input"
          />

          <br/>

          <label htmlFor="username">Username:</label>
          <br/>
          <input
            type="test"
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
          <label htmlFor="varify-password">Verify Password:</label>
          <br/>
          <input
            type="password"
            id="verify-password"
            name="verify-password"
            className="account-input"
          />

          <br/>
          <br/>

          <Link
            to={"/"}
          >
            <input
              type="submit"
              value="Submit"
              id="signup-button"
            />
          </Link>
          
        </fieldset>
      </form>
    )
  }
}

export default SignUpPage
