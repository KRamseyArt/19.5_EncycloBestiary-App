import React, { Component } from 'react'

import './Bestiary.css'
import Context from '../../../../../../Context'

import BestiaryData from './BestiaryData/BestiaryData';
import DataList from './DataList/DataList';

export class Bestiary extends Component {
  static contextType = Context;

  static defaultProps = {
    match:{
      params:{
        bestiaryId: null
      }
    }
  }
  
  render() {
    const bestiaryID = this.props.match.params.bestiaryId;
    const bestiaryData = this.context.data.filter(d => {
      return d.bestiary_id === bestiaryID
    })
    console.log(bestiaryData)
    
    return (
      <div id="BestiaryPage">
        <BestiaryData
          activeBestiaryID={this.context.activeBestiaryID}
          bestiaryId={this.props.match.params.bestiaryId}
        />
        <DataList
          activeBestiaryId={this.props.match.params.bestiaryId}
          bestiaryData={bestiaryData}
        />
      </div>
    )
  }
}

export default Bestiary
