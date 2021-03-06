import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './LogInPage.css';
import Context from '../../../Context';
import AuthApiService from '../../../Services/auth-api-service';
import TokenService from '../../../Services/token-service';

export class LogInPage extends Component {
  static contextType = Context;

  static defaultProps = {
    history: {
      push: () => {},
    }
  }

  state = { error: null };

  handleSubmitJwtAuth = e => {
    e.preventDefault();

    this.setState({ error: null });
    const { username, password } = e.target;

    AuthApiService.postLogin ({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        username.value="";
        password.value="";
        this.context.setUser(res.authToken);
        this.onLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      })
  }

  onLoginSuccess = () => {
    const { history } = this.props;
    const destination = `/users/${TokenService.readJwtToken().user_id}`;
    history.push(destination);
  }
  
  render() {  
    return (
      <form
        id="LogIn-Form"
        onSubmit={this.handleSubmitJwtAuth}  
      >
        <fieldset>
          <legend>Log-In</legend>
          <p>Sign into your existing account</p>
          
          <label htmlFor="username">Username:</label>
          <input
            type="text"
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

          <div id="demo-details">
            <h2 className="heading-text">Try it Out!</h2>
            <p> Username: 'Demo'</p>
            <p>Password: 'Testing123!'</p>
          </div>

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

export default LogInPage;