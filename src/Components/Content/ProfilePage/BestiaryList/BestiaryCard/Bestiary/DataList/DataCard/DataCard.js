import React, { Component } from 'react'

import './DataCard.css'
import Context from '../../../../../../../../Context'

export class DataCard extends Component {
  static contextType = Context;
  
  render() {
    const data = this.props.data;
    return (
      <li className="DataCard">
        <div className="DataInfo">
          <h4 className="heading-text DataName">{data.data_name}</h4>
          <button
            className="btn"
            onClick={() => this.context.deleteData(data.id)}
          >
            Delete
          </button>
        </div>
        <div className="DataDescription">
          <p>{data.data_description}</p>
        </div>
      </li>
    )
  }
}

export default DataCard
