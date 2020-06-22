import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './BestiaryList.css'
import BestiaryCard from './BestiaryCard/BestiaryCard'

export class BestiaryList extends Component {
  render() {
    return (
      <div id="Bestiary-List">
        <section id="BestiaryHeader">
          <h3 id="BestiaryTitle">Bestiaries:</h3>
          <Link
            to={"/users/:userId/add-bestiary"}
          >
            <button id="addNewBestiary-button">Add New</button>
          </Link>
        </section>
        <section id="User-Collections">
          <BestiaryCard />
          <BestiaryCard />
          <BestiaryCard />
          <BestiaryCard />
          <BestiaryCard />
          <BestiaryCard />
          <BestiaryCard />
          <BestiaryCard />
        </section>
      </div>
    )
  }
}

export default BestiaryList
