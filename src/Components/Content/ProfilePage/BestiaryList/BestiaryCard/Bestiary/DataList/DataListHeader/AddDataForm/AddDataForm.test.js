import React from 'react';
import ReactDOM from 'react-dom';
import { BroswerRouter as Router } from 'react-router-dom';

import AddDataForm from './AddDataForm';

describe (`AddDataForm Component`, () => {

  // smoke test
  it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <AddDataForm />
      </Router>, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })

})
