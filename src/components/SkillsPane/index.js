import React from 'react';
import PropTypes from 'prop-types';

import { Badge, Pane, Text, Tooltip } from 'evergreen-ui';
import Card from '../Card';
import Modifier from '../Modifier';

import './SkillsPane.css';
import proficiencyList from '../../models/proficiency';

const SkillEntry = ({ skill }) => {
  const { name, statMod, proficiency, modifier } = skill;
  const badgeColor =
    proficiencyList[proficiency] && proficiencyList[proficiency].color;
  const profName =
    proficiencyList[proficiency] && proficiencyList[proficiency].name;
  return (
    <Pane display="table-row">
      <Text display="table-cell">
        {badgeColor && (
          <Tooltip content={profName}>
            <Badge color={badgeColor}>{profName[0]}</Badge>
          </Tooltip>
        )}
      </Text>
      <Text display="table-cell">{statMod}</Text>
      <Text display="table-cell">{name}</Text>
      <Modifier display="table-cell">{modifier}</Modifier>
    </Pane>
  );
};
SkillEntry.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string,
    statMod: PropTypes.string,
    proficiency: PropTypes.string,
    modifier: PropTypes.number,
  }).isRequired,
};

// Declare a component that returns an HTML button with the given properties
const SkillsPane = ({ skills }) => {
  const keys = Object.keys(skills);
  return (
    <Card cellWidth={3}>
      <Text padding={4}>SKILLS</Text>
      <Pane display="table" width="100%">
        {keys.map(key => {
          return <SkillEntry key={key} skill={skills[key]} />;
        })}
      </Pane>
    </Card>
  );
};

// Description - appears in the storybook item
SkillsPane.description = `
Ability Score displays should display the score and roll modifiers based on the score
`;

// This allows for the definition of rules that each prop type has to follow in order to be used properly
SkillsPane.propTypes = {
  /** Text that will appear in the button
     This will default to 'I am a button' if not present */
  // todo theres some bug with eslint checking proptypes
  skills: PropTypes.shape({ map: PropTypes.func }).isRequired,
};

// What properties the component should have when nothing is defined
SkillsPane.defaultProps = {};

export default SkillsPane;
