import React from 'react';
import ReactDOM from 'react-dom';
import SkillsPane from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <SkillsPane variant="primary" onClick={() => {}}>
      This is a button!
    </SkillsPane>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
