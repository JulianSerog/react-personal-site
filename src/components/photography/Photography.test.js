import React from 'react';
import ReactDOM from 'react-dom';
import Photography from './Photography';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Photography />, div);
  ReactDOM.unmountComponentAtNode(div);
});
