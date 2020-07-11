import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './LogInPage.css'
import Context from '../../../Context';
import AuthApiService from '../../../Services/auth-api-service'
import TokenService from '../../../Services/token-service'

export class LogInPage extends Component {
  static contextType = Context;

  static defaultProps = {
    location: [],
    history: {
      push: () => {},
    }
  }

  state = { error: null }

  handleSubmitJwtAuth = e => {
    e.preventDefault()

    console.log('Log in clicked')
    this.setState({ error: null })
    const { username, password } = e.target

    AuthApiService.postLogin ({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        username.value=""
        password.value=""
        this.context.setUser(res.authToken)
        console.log(res)
        this.onLoginSuccess()
      })
      .catch(res => {
        console.error(res)
        this.setState({ error: res.error })
      })
  }

  onLoginSuccess = () => {
    const { location, history } = this.props
    const destination = `/users/${TokenService.readJwtToken().user_id}`
    history.push(destination)
  }
  
  render() {
    const { error } = this.state
  
    return (
      <form
        id="LogIn-Form"
        onSubmit={this.handleSubmitJwtAuth}  
      >
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
            required
          />

          <br/>
          
          <label htmlFor="password">Password:</label>
          <br/>
          <input
            type="password"
            id="password"
            name="password"
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

export default LogInPage
