import React from 'react';
import ReactDOM from 'react-dom';
import { BroswerRouter as Router } from 'react-router-dom';

import BestiaryCard from './BestiaryCard';

describe (`BestiaryCard Component`, () => {

  // smoke test
  it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <BestiaryCard />
      </Router>, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })

})
