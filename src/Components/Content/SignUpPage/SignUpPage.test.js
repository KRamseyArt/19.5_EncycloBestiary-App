import React from 'react';
import ReactDOM from 'react-dom';
import { BroswerRouter as Router } from 'react-router-dom';

import SignUpPage from './SignUpPage';

describe (`SignUpPage Component`, () => {

  // smoke test
  it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <SignUpPage />
      </Router>, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })

})
