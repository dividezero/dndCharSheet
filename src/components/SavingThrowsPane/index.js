import React from 'react';
import PropTypes from 'prop-types';

import { Pane, Text, Strong } from 'evergreen-ui';
import Card from '../Card';
import ProficiencyBadge from '../ProficiencyBadge';
import './SavingThrowsPane.css';

// Declare a component that returns an HTML button with the given properties
const SavingThrowsPane = ({ savingThrows }) => {
  const keys = Object.keys(savingThrows);
  return (
    <Card cellWidth={3}>
      <Text padding={4}>SAVING THROWS</Text>
      <Pane display="table" width="100%">
        {keys.map(key => (
          <Pane display="table-row">
            <div style={{textAlign:"right"}}>
              <ProficiencyBadge proficiency={savingThrows[key].proficiency} />
            </div>
            <Text display="table-cell">{key}</Text>
            <Strong display="table-cell" textAlign="right">{savingThrows[key].value}</Strong>
          </Pane>
        ))}
      </Pane>
    </Card>
  );
};

// Description - appears in the storybook item
SavingThrowsPane.description = `
Ability Score displays should display the score and roll modifiers based on the score
`;

// This allows for the definition of rules that each prop type has to follow in order to be used properly
SavingThrowsPane.propTypes = {
  /** Text that will appear in the button
     This will default to 'I am a button' if not present */
  // todo theres some bug with eslint checking proptypes
  savingThrows: PropTypes.shape({}).isRequired,
};

// What properties the component should have when nothing is defined
SavingThrowsPane.defaultProps = {};

export default SavingThrowsPane;
