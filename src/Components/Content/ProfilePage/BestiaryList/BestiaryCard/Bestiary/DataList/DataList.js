import React, { Component } from 'react'

import './DataList.css';
import DataCard from './DataCard/DataCard';
import DataListHeader from './DataListHeader/DataListHeader';

export class DataList extends Component {
  render() {
    return (
      <div id="Data-List">
        <DataListHeader />

        <ul id="Data-Collections">
          <DataCard />
          <DataCard />
          <DataCard />
          <DataCard />
          <DataCard />
          <DataCard />
          <DataCard />
          <DataCard />
        </ul>
      </div>
    )
  }
}

export default DataList
