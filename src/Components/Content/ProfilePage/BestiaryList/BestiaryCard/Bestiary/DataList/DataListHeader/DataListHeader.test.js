import React from 'react';
import ReactDOM from 'react-dom';
import { BroswerRouter as Router } from 'react-router-dom';

import DataListHeader from './DataListHeader';

describe (`DataListHeader Component`, () => {

  // smoke test
  it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <DataListHeader />
      </Router>, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })

})
