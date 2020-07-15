import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import BestiaryData from './BestiaryData';

describe (`BestiaryData Component`, () => {

  // smoke test
  it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <BestiaryData />
      </Router>, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })

})
