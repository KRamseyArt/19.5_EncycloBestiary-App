import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './DataListHeader.css'
import Context from '../../../../../../../../Context'
import TokenService from '../../../../../../../../Services/token-service'

export class DataListHeader extends Component {
  static contextType = Context;

  render() {
    return (
      <section id="DataHeader">
        <Link
          to={`/users/${this.context.user.id}/bestiaries/${this.context.activeBestiaryID}/add-data`}
        >
          <button
            className="btn"
          >
            Add New
          </button>
        </Link>
        <h3 id="DataTitle">Bestiary Data:</h3>
      </section>
    )
  }
}

export default DataListHeader
