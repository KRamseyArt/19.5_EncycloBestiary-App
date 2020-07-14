import React from 'react';
import ReactDOM from 'react-dom';
import { BroswerRouter as Router } from 'react-router-dom';

import ProfilePage from './ProfilePage';

describe (`ProfilePage Component`, () => {

  // smoke test
  it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <ProfilePage />
      </Router>, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })

})
