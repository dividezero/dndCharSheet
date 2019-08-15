import React from 'react';
import ReactDOM from 'react-dom';
import ProficienciesPane from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ProficienciesPane variant="primary" onClick={() => {}}>
      This is a button!
    </ProficienciesPane>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
