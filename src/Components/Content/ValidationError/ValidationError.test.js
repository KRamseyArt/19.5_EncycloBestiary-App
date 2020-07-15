import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import ValidationError from './ValidationError';

describe (`ValidationError Component`, () => {

  // smoke test
  it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      //<Router>
        <ValidationError />
      //</Router>, 
      ,div
    );
    ReactDOM.unmountComponentAtNode(div);
  })

})
