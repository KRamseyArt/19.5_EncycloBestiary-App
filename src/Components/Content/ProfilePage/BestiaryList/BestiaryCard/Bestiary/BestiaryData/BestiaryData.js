import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './BestiaryData.css'
import Context from '../../../../../../../Context';
import TokenService from '../../../../../../../Services/token-service';

export class BestiaryData extends Component {
  static contextType = Context;

  render() {
    console.log(this.props.bestiaryId)
    const bestiary = this.context.bestiaries.filter(b => b.id == this.props.bestiaryId)[0]
      || {bestiary_name: "Oops...", bestiary_description: "It seems the bestiary you're looking for does not exist. Please try again!"}
    console.log(bestiary)
    
    return (
      <nav id="Bestiary-Data">
        <h3 id="Bestiary-Name" className="heading-text">"{bestiary.bestiary_name}" Data</h3>
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
          <li>
            <Link
              to={`/users/${this.context.user.id}/bestiaries/${this.props.bestiaryId}/add-data`}
            >
              <button
                className="btn"
              >
                Add New
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default BestiaryData
