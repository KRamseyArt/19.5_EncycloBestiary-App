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
          <p>Create Catalogs of data known as 'Bestiaries', which store a variety of information about a particular topic! Create a Bestiary to outline regions in your world, another to map out the various monsters and species, and yet another to cover different items and various other collectables!</p>
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
