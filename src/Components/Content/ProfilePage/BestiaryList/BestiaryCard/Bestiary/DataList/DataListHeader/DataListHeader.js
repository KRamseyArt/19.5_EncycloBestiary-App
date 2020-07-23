import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './DataListHeader.css'
import Context from '../../../../../../../../Context'

export class DataListHeader extends Component {
  static contextType = Context;

  render() {
    return (
      <section id="DataHeader">
        <h3 id="DataTitle" className="heading-text">Bestiary Data:</h3>
        <Link
          to={`/users/${this.context.user.id}/bestiaries/${this.props.activeBestiaryId}/add-data`}
        >
          <button
            className="btn"
          >
            Add New
          </button>
        </Link>
        
      </section>
    )
  }
}

export default DataListHeader
