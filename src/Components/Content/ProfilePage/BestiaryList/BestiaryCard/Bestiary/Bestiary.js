import React, { Component } from 'react'

import './Bestiary.css'
import Context from '../../../../../../Context'

import BestiaryData from './BestiaryData/BestiaryData';
import DataList from './DataList/DataList';

export class Bestiary extends Component {
  static contextType = Context;
  
  render() {
    const bestiaryID = this.context.activeBestiaryID;
    const bestiaryData = this.context.data.filter(d => {
      return d.bestiary_id === bestiaryID
    })
    console.log(bestiaryData)
    
    return (
      <div id="BestiaryPage">
        <BestiaryData
          activeBestiaryID={bestiaryID}
        />
        <DataList
          activeBestiaryID={bestiaryID}
          bestiaryData={bestiaryData}
        />
      </div>
    )
  }
}

export default Bestiary
