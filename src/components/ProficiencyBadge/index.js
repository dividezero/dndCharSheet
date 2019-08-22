import React from 'react';
import PropTypes from 'prop-types';

import { Badge, Text, Tooltip } from 'evergreen-ui';
import proficiencyList from '../../stubs/proficiency';

// Declare a component that returns an HTML button with the given properties
const ProficiencyBadge = ({ proficiency }) => {
  const badgeColor =
    proficiencyList[proficiency] && proficiencyList[proficiency].color;
  const profName =
    proficiencyList[proficiency] && proficiencyList[proficiency].name;
  return (
    <Text display="table-cell">
      {badgeColor && (
        <Tooltip content={profName}>
          <Badge color={badgeColor}>{profName[0]}</Badge>
        </Tooltip>
      )}
    </Text>
  );
};

ProficiencyBadge.description = `
Displays proficiency badge
`;

ProficiencyBadge.propTypes = {
  proficiency: PropTypes.oneOf(Object.keys(proficiencyList)).isRequired,
};

// What properties the component should have when nothing is defined
ProficiencyBadge.defaultProps = {};

export default ProficiencyBadge;
