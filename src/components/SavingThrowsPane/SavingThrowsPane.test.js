import React from 'react';
import ReactDOM from 'react-dom';
import SavingThrowsPane from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <SavingThrowsPane variant="primary" onClick={() => {}}>
      This is a button!
    </SavingThrowsPane>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
