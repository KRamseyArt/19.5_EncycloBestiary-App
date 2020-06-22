import React, { Component } from 'react'

import './Bestiary.css'
import BestiaryData from './BestiaryData/BestiaryData';
import DataList from './DataList/DataList';

export class Bestiary extends Component {
  render() {
    return (
      <div id="ProfilePage">
        <BestiaryData />
        <DataList />
      </div>
    )
  }
}

export default Bestiary
