import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './BestiaryCard.css'
import Context from '../../../../../Context';
import TokenService from '../../../../../Services/token-service';

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
              to={`/users/${this.context.user.id}/bestiaries/${bestiary.id}`}
              onClick={() => this.context.setActiveBestiaryID(bestiary.id)}
            >
              <button
                className="btn"
              >
                Edit
              </button>
            </Link>
            
          </li>
          <li>
            <button
              className="btn"
              onClick={() => this.context.deleteBestiary(bestiary.id)}
            >
              Delete
            </button>
          </li>
        </ul>
      </div>
    )
  }
}

export default BestiaryFolder
