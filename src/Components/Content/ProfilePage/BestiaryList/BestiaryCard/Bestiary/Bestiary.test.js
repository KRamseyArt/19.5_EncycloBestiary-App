import React from 'react';
import ReactDOM from 'react-dom';
import { BroswerRouter as Router } from 'react-router-dom';

import Bestiary from './Bestiary';

describe (`Bestiary Component`, () => {

  // smoke test
  it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Bestiary />
      </Router>, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })

})
