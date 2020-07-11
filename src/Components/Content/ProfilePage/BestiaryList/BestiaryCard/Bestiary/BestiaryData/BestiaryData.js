import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './BestiaryData.css'
import Context from '../../../../../../../Context';

export class BestiaryData extends Component {
  static contextType = Context;

  state = {
    activeBestiaryID: null,
  }

  render() {
    console.log(this.props)
    const bestiary = this.context.bestiaries.filter(b => b.id === this.props.activeBestiaryID)[0]
      || {bestiary_name: "Reload Placeholder", bestiary_description: "Reload Placeholder"}
    console.log(bestiary)
    
    return (
      <nav id="Bestiary-Data">
        <h3 id="Bestiary-Name">{bestiary.bestiary_name}</h3>
        
        <p id="Bestiary-Description">{bestiary.bestiary_description}</p>
        <ul id="Bestiary-Nav">
          <li>
            <Link
              to={`/users/${this.context.user.id}`}
            >
              <button>
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
