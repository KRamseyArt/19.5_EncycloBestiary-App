import React, { Component } from 'react'

import './DataCard.css'

export class DataCard extends Component {
  render() {
    return (
      <li className="DataCard">
        <div className="DataInfo">
          <h4 className="DataName">Data Name</h4>
          <button className="deleteData-button">Delete</button>
        </div>
        <div className="DataDescription">
          <p>Data Description</p>
        </div>
      </li>
    )
  }
}

export default DataCard
