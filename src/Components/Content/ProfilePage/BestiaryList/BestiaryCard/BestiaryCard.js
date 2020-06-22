import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './BestiaryCard.css'

export class BestiaryFolder extends Component {
  render() {
    return (
      <div className="Bestiary-Card">
        <h5>Bestiary 1</h5>
        <p>Description text</p>
        <ul className="Bestiary-Settings">
          <li>
            <Link
              to={"/users/:userId/bestiaries/:bestiaryId"}
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
