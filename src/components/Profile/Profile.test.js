import React from 'react';
import ReactDOM from 'react-dom';
import AbilityScoreCard from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AbilityScoreCard variant="primary" onClick={() => {}}>
      This is a button!
    </AbilityScoreCard>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
