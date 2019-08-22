import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { IconButton, Pane, Text, TagInput } from 'evergreen-ui';
import Card from '../Card';

import './ProficienciesPane.css';

const ProficiencyGroup = ({ group, proficiencies, disabled, onChange }) => {
  return (
    <Pane marginBottom={8}>
      <Text>{group}</Text>
      <TagInput
        width="100%"
        values={proficiencies}
        disabled={disabled}
        onChange={onChange}
      />
    </Pane>
  );
};
ProficiencyGroup.propTypes = {
  group: PropTypes.string.isRequired,
  proficiencies: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};
ProficiencyGroup.defaultProps = {
  disabled: true,
  onChange: () => {},
};

// Declare a component that returns an HTML button with the given properties
const ProficienciesPane = ({ proficiencyGroups, onChange }) => {
  const [editable, setEditable] = useState(false);

  const changeHandler = groupName => newValues => {
    const newGroups = proficiencyGroups.map(proficiencyGroup => {
      const { group } = proficiencyGroup;
      if (group === groupName) return { group, newValues };
      return proficiencyGroup;
    });
    onChange(newGroups);
  };

  return (
    <Card cellWidth={3}>
      <Pane
        width="100%"
        display="flex"
        flex-direction="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <div />
        <Text padding={4}>PROFICIENCIES</Text>
        <IconButton
          appearance="minimal"
          icon={editable ? 'unlock' : 'lock'}
          height={24}
          onClick={() => setEditable(!editable)}
        />
      </Pane>
      <Pane display="table" width="100%">
        {proficiencyGroups.map(({ group, proficiencies }, key) => {
          return (
            <ProficiencyGroup
              disabled={!editable}
              key={key}
              group={group}
              proficiencies={proficiencies}
              onChange={changeHandler(group)}
            />
          );
        })}
      </Pane>
    </Card>
  );
};

// Description - appears in the storybook item
ProficienciesPane.description = `
Proficiencies pane displays all your proficiencies including armor and language proficiencies
`;

// This allows for the definition of rules that each prop type has to follow in order to be used properly
ProficienciesPane.propTypes = {
  // todo theres some bug with eslint checking proptypes
  proficiencyGroups: PropTypes.arrayOf(
    PropTypes.shape({
      group: PropTypes.string,
      proficiencies: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
  onChange: PropTypes.func,
};

// What properties the component should have when nothing is defined
ProficienciesPane.defaultProps = {
  onChange: () => {},
};

export default ProficienciesPane;
