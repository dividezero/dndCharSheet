import React from 'react';
import PropTypes from 'prop-types';

import { Avatar, Text, Pane } from 'evergreen-ui';
import Card from '../Card';

import { cellMargin } from '../../theme/layout';

import './Profile.css';

// Declare a component that returns an HTML button with the given properties
const Profile = ({ name, race, classes, image }) => {
  const classDesc = classes.reduce(
    (acc, { class: className, level }) => `${acc} ${className}(${level})`,
    '',
  );
  return (
    <Card
      cellWidth={3}
      cellHeight={1}
      isRowDirection
      justifyContent="flex-start"
    >
      <Avatar
        isSolid
        name={name}
        src={image}
        size={50}
        marginRight={cellMargin}
      />
      <Pane display="flex" flexDirection="column">
        <Text size={600}>{name}</Text>
        <Text size={300}>{race}</Text>
        <Text size={300}>{classDesc}</Text>
      </Pane>
    </Card>
  );
};

// Description - appears in the storybook item
Profile.description = `
Profile should show profile image and basic info about the character
`;

// This allows for the definition of rules that each prop type has to follow in order to be used properly
Profile.propTypes = {
  /** Text that will appear in the button
     This will default to 'I am a button' if not present */
  name: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
  image: PropTypes.string,
  classes: PropTypes.arrayOf(
    PropTypes.shape({
      class: PropTypes.string,
      level: PropTypes.number,
    }),
  ).isRequired,
};

// What properties the component should have when nothing is defined
Profile.defaultProps = {
  image: undefined,
};

export default Profile;
