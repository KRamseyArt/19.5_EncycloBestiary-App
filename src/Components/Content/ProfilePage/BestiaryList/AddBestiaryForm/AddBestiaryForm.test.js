import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import AddBestiaryForm from './AddBestiaryForm';

describe (`AddBestiaryForm Component`, () => {

  // smoke test
  it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <AddBestiaryForm />
      </Router>
      ,div
    );
    ReactDOM.unmountComponentAtNode(div);
  })

})
