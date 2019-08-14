import React from 'react';
import PropTypes from 'prop-types';

import { Text, Heading } from 'evergreen-ui';
import Card from '../Card';

import './StatCard.css';

// Declare a component that returns an HTML button with the given properties
const StatCard = ({ topText, bottomText, value }) => {
  return (
    <Card cellWidth={1} cellHeight={1}>
      <Text>{topText}</Text>
      <Heading size={900}>{value}</Heading>
      <Text>{bottomText}</Text>
    </Card>
  );
};

// Description - appears in the storybook item
StatCard.description = `
Score Cards should display a small card for a specific stat
`;

// This allows for the definition of rules that each prop type has to follow in order to be used properly
StatCard.propTypes = {
  /** Text that will appear in the button
     This will default to 'I am a button' if not present */
  topText: PropTypes.string,
  value: PropTypes.string.isRequired,
  bottomText: PropTypes.string,
};

// What properties the component should have when nothing is defined
StatCard.defaultProps = {
  topText: '',
  bottomText: '',
};

export default StatCard;
