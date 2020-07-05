import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './BestiaryCard.css'

export class BestiaryFolder extends Component {
  render() {
    const data = this.props.bestiary;

    return (
      <div className="Bestiary-Card">
        <h5>{data.bestiary_name}</h5>
        <p>{data.bestiary_description}</p>
        <ul className="Bestiary-Settings">
          <li>
            <Link
              to={`/users/:userId/bestiaries/${data.id}`}
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
