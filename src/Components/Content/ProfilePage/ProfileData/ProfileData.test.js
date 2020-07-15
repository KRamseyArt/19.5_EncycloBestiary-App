import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import ProfileData from './ProfileData';

describe (`ProfileData Component`, () => {

  // smoke test
  it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <ProfileData />
      </Router>, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })

})
