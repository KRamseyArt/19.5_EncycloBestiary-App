import React from 'react';
import ReactDOM from 'react-dom';
import { BroswerRouter as Router } from 'react-router-dom';

import HomePage from './HomePage';

describe (`HomePage Component`, () => {

  // smoke test
  it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <HomePage />
      </Router>, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })

})
