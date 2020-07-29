import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./HomePage.css";
import Context from "../../../Context";

export class HomePage extends Component {
  static contextType = Context;

  render() {
    return ( 
      <div id = "Home-Content">
        <section >
          <h2 className = "heading-text" > Let 's Build Your World Together</h2>
          <p>
            Encyclo• Bestiary is a platform to help organize and map out the intricacies of the mystical, magical worlds inside your head!
          </p>
        </section> 
        <section>
          <h2 className = "heading-text" > Customize Your Catalogs </h2>
          <p>
            Create Catalogs of data known as 'Bestiaries', which store a variety of information about a particular topic!Create a Bestiary to outline regions in your world, another to map out the various monsters and species, and yet another to cover different items and various other collectables!
          </p>
        </section>
        <section>
          <h2 className = "heading-text" > Try Before You Sign Up! </h2>
          <p>
            Simply visit the < Link to = "/log-in" > Log In Page </Link> and enter the
            demo credentials to test out the platform!Be aware, anybody will have access to this account, and so none of the info stored there will be secure or protected - however, it is 100 % FREE to sign up
            for an account all your own!
          </p>
        </section>
      </div>
    );
  }
}

export default HomePage;