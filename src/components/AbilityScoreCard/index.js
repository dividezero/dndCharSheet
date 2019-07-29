import React from 'react';
import PropTypes from 'prop-types';

import {  Text, Heading } from 'evergreen-ui';
import Card from '../Card';
import { getModifier, formatModifier } from '../../utils';

import './AbilityScoreCard.css';

// Declare a component that returns an HTML button with the given properties
const AbilityScoreCard = ({ name, value }) => {
  return (
    <Card cellWidth={1} cellHeight={1}>
      <Text>{name}</Text>
      <Heading size={900}>{formatModifier(getModifier(value))}</Heading>
      <Text>{value}</Text>
    </Card>
  );
};

// Description - appears in the storybook item
AbilityScoreCard.description = `
Ability Score displays should display the score and roll modifiers based on the score
`;

// This allows for the definition of rules that each prop type has to follow in order to be used properly
AbilityScoreCard.propTypes = {
  /** Text that will appear in the button
     This will default to 'I am a button' if not present */
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

// What properties the component should have when nothing is defined
AbilityScoreCard.defaultProps = {};

export default AbilityScoreCard;
