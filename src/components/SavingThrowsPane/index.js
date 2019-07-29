import React from 'react';
import PropTypes from 'prop-types';

import { Pane, Text, Strong } from 'evergreen-ui';
import Card from '../Card';
import './SavingThrowsPane.css';

// Declare a component that returns an HTML button with the given properties
const SavingThrowsPane = ({ savingThrows }) => {
  const keys = Object.keys(savingThrows);
  return (
    <Card cellWidth={2}>
      <Text padding={4}>SAVING THROWS</Text>
      {keys.map(key => (
        <Pane
          key={key}
          width="100%"
          padding={4}
          display="flex"
          justifyContent="space-between"
        >
          <Text>{key}</Text>
          <Strong>{savingThrows[key]}</Strong>
        </Pane>
      ))}
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
  savingThrows: PropTypes.shape({ map: PropTypes.func }).isRequired,
};

// What properties the component should have when nothing is defined
SavingThrowsPane.defaultProps = {};

export default SavingThrowsPane;
