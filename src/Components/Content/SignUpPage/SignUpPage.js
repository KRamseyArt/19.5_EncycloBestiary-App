import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthApiService from '../../../Services/auth-api-service'

import './SignUpPage.css'
import ValidationError from '../ValidationError/ValidationError'

export class SignUpPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  state = {
    error: null
  }

  handleRegistrationSuccess = () => {
    const { history } = this.props
    history.push('/log-in')
  }

  handleSubmit = e => {
    e.preventDefault()
    const { username, email, password, verify_password } = e.target

    this.setState({ error: null })
    if (password !== verify_password){
      this.setState({ error: 'Passwords do not match' })
    }

    AuthApiService.postUser({
      username: username.value,
      password: password.value,
      email: email.value,
    })
      .then(user => {
        username.value = ""
        email.value = ""
        password.value = ""
        verify_password.value = ""
        this.handleRegistrationSuccess()
      })
      .catch(res => {
        this.setState({
          error: res.error
        })
      })
  }
  
  render() {
    const { error } = this.state

    return (
      <form
        id="SignUp-Form"
        onSubmit={this.handleSubmit}
      >
        <fieldset>
          <legend>Sign-Up</legend>
          <p>Create a new account</p>
          {error && (
            <ValidationError mesasge={error}>
              <div>
                Sign-up form meets requirements
              </div>
            </ValidationError>
          )}
          
          <br/>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="account-input"
            required
          />

          <br/>
          <label htmlFor="username">Username:</label>
          <input
            type="test"
            id="username"
            name="username"
            className="account-input"
            required
          />

          <br/>
          
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            className="account-input"
            required
          />
          <br/>
          <label htmlFor="varify-password">Verify Password:</label>
          <input
            type="password"
            id="verify-password"
            name="verify-password"
            className="account-input"
            required
          />

          <br/>

          <div className="navButtons">
            <Link
              to={`/`}
            >
              <button
                className="btn"
              >
                Back
              </button>
            </Link>
            <input
              type="submit"
              value="Submit"
              className="btn"
            />
          </div>
          
        </fieldset>
      </form>
    )
  }
}

export default SignUpPage
