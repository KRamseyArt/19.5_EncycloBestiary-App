import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './DataListHeader.css'

export class DataListHeader extends Component {
  render() {
    return (
      <section id="DataHeader">
        <Link
          to={"/users/:userId/bestiaries/:bestiaryId/add-data"}
        >
          <button id="addNewData-button">Add New</button>
        </Link>
        <h3 id="DataTitle">Bestiary Data:</h3>
      </section>
    )
  }
}

export default DataListHeader
