import React, { Component } from 'react'
import Context from '../../../Context'

import './HomePage.css'

export class HomePage extends Component {
  static contextType = Context;
  
  render() {
    return (
      <div id="Home-Content">
        <section>
          <h2 class="heading-text">Let's Build Your World Together</h2>
          <p>Encyclo•Bestiary is a platform to help organize and map out the intricacies of the mystical, magical worlds inside your head!</p>
        </section>
        <section>
          <h2 class="heading-text">Customize Your Catalogs</h2>
          <p>Create folders to store related and relevant data, keeping all your ideas grouped together!</p>
        </section>
        <section>
          <h2 class="heading-text">Test it out!</h2>
          <p>Feel free to try it out before you sign up for your own account! Visit the login page and enter:</p>
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
