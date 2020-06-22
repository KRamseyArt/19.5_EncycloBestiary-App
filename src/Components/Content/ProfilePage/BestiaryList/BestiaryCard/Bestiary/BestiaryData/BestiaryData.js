import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './BestiaryData.css'

export class BestiaryData extends Component {
  render() {
    return (
      <nav id="Bestiary-Data">
        <h3 id="Bestiary-Name">Bestiary 1</h3>
        
        <p id="Bestiary-Description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae nam dicta harum dignissimos repellendus minus maiores alias illum aspernatur corrupti.</p>
        <ul id="Bestiary-Nav">
          <li>
            <Link
              to={"/users/:userId"}
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
