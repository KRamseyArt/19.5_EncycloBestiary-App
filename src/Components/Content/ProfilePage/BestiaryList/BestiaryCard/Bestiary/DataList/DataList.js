import React, { Component } from 'react'

import './DataList.css';
import DataCard from './DataCard/DataCard';

export class DataList extends Component {
  static defaultProps = {
    bestiaryData: []
  }

  render() {
    const bestiaryData = this.props.bestiaryData;
    return (
      <div id="Data-List">
        <ul id="Data-Collections">
          {bestiaryData.map(data => {
            return (
              <DataCard
                id={data.id}
                key={data.id}
                data={data}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default DataList
