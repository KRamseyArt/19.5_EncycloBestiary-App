import React, { Component } from 'react';

import './BestiaryList.css';
import Context from '../../../../Context';
import BestiaryCard from './BestiaryCard/BestiaryCard';

export class BestiaryList extends Component {
  static contextType = Context;

  render() {
    const {bestiaries} = this.context;

    return (
      <div id="Bestiary-List">
        
        <section id="User-Collections">
          {bestiaries.map(bestiary =>
            <BestiaryCard
              key={bestiary.id}
              bestiary={bestiary}
            />
          )}
        </section>
      </div>
    );
  }
}

export default BestiaryList;
