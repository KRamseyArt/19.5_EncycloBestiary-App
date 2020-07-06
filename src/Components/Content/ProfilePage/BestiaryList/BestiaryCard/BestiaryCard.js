import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './BestiaryCard.css'
import Context from '../../../../../Context';

export class BestiaryFolder extends Component {
  static contextType = Context;
  
  render() {
    const bestiary = this.props.bestiary;
    console.log(this.context);

    return (
      <div className="Bestiary-Card">
        <h5>{bestiary.bestiary_name}</h5>
        <p>{bestiary.bestiary_description}</p>
        <ul className="Bestiary-Settings">
          <li>
            <Link
              to={`/users/:userId/bestiaries/${bestiary.id}`}
              onClick={this.context.setActiveBestiaryID(bestiary.id)}
            >
            <button>Edit</button>
            </Link>
            
          </li>
          <li>
            <button>Delete</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default BestiaryFolder
