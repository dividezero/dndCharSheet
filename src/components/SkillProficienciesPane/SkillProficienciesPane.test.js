import React from 'react';
import ReactDOM from 'react-dom';
import SkillProficienciesPane from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <SkillProficienciesPane variant="primary" onClick={() => {}}>
      This is a button!
    </SkillProficienciesPane>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
