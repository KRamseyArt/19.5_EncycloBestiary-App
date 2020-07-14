import React from 'react';
import ReactDOM from 'react-dom';
import { BroswerRouter as Router } from 'react-router-dom';

import NavBar from './NavBar';

describe (`NavBar Component`, () => {

  // smoke test
  it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <NavBar />
      </Router>, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })

})
