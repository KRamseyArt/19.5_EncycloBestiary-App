import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import DataList from './DataList';

describe (`DataList Component`, () => {

  // smoke test
  it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <DataList />
      </Router>, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })

})
