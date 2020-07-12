import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './BestiaryData.css'
import Context from '../../../../../../../Context';
import TokenService from '../../../../../../../Services/token-service';

export class BestiaryData extends Component {
  static contextType = Context;

  render() {
    console.log(this.props)
    const bestiary = this.context.bestiaries.filter(b => b.id === this.context.activeBestiaryID)[0]
      || {bestiary_name: "Reload Placeholder", bestiary_description: "Reload Placeholder"}
    console.log(bestiary)
    
    return (
      <nav id="Bestiary-Data">
        <h3 id="Bestiary-Name" className="heading-text">{bestiary.bestiary_name}</h3>
        <hr />
        <p id="Bestiary-Description">{bestiary.bestiary_description}</p>
        <ul id="Bestiary-Nav">
          <li>
            <Link
              to={TokenService.hasAuthToken() ? `/users/${this.context.user.id}` : `/log-in`}
            >
              <button className="btn">
                Back
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default BestiaryData
