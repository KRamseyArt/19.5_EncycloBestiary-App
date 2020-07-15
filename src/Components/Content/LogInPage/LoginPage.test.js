import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import LogInPage from './LogInPage';

describe (`LogInPage Component`, () => {

  // smoke test
  it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <LogInPage />
      </Router>, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })

})
