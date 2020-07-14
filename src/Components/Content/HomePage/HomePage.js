import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './HomePage.css'
import Context from '../../../Context'

export class HomePage extends Component {
  static contextType = Context;
  
  render() {
    return (
      <div id="Home-Content">
        <section>
          <h2 className="heading-text">Let's Build Your World Together</h2>
          <p>Encyclo•Bestiary is a platform to help organize and map out the intricacies of the mystical, magical worlds inside your head!</p>
        </section>
        <section>
          <h2 className="heading-text">Customize Your Catalogs</h2>
          <p>Create folders to store related and relevant data, keeping all your ideas grouped together!</p>
        </section>
        <section>
          <h2 className="heading-text">Test it out!</h2>
          <p>Feel free to try it out before you<Link to={`/sign-up`}> Sign Up </Link>for your own account! Visit the<Link to={`/log-in`}> Log In </Link>page and enter:</p>
          <br/>
          <div id="demo-details">
            <p> Username: 'Demo'</p>
            <p>Password: 'Testing123!'</p>
          </div>
        </section>
      </div>
    )
  }
}

export default HomePage;
