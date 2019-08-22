import React from 'react';
import PropTypes from 'prop-types';

import { getModifier, formatModifier } from '../../utils';
import StatCard from '../StatCard';

import './AbilityScoreCard.css';

// Declare a component that returns an HTML button with the given properties
const AbilityScoreCard = ({ name, value }) => {
  return (
    <StatCard
      topText={name}
      bottomText={value}
      background="tealTint"
      value={formatModifier(getModifier(value))}
    />
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
