import React from 'react';
import ReactDOM from 'react-dom';

import AddBestiaryForm from './AddBestiaryForm';

it ('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddBestiaryForm/>, div);
  ReactDOM.unmountComponentAtNode(div);
})