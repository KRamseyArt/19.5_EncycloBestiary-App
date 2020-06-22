import React, { Component } from 'react'
import Context from '../../../Context'

import './HomePage.css'

export class HomePage extends Component {
  static contextType = Context;
  
  render() {
    return (
      <div id="Home-Content">
        <section>
          <h2>Let's Build Your World Together</h2>
          <p>Encyclo•Bestiary is a platform to help organize and map out the intricacies of the mystical, magical worlds inside your head!</p>
        </section>
        <section>
          <h2>Customize Your Catalogs</h2>
          <p>Use our custom field declarations to expand the depth of your Bestiaries! Create a catalog for a world map, charting out various regions and biomes within your world. Then link to that very same Catalog in your Creature Bestiary, pinpointing which regions your monstrosities are local to!</p>
        </section>
        <section>
          <h2>Header3</h2>
          <p>Info</p>
        </section>
      </div>
    )
  }
}

export default HomePage;
