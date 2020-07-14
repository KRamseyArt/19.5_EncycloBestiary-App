import React from 'react';
import ReactDOM from 'react-dom';
import { BroswerRouter as Router } from 'react-router-dom';

import DataCard from './DataCard';

describe (`DataCard Component`, () => {

  // smoke test
  it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <DataCard />
      </Router>, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })

})
