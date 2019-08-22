/* global module */
import React from 'react';
import { storiesOf, withInfo } from '../../../.storybook/stories';

import ProficienciesPane from './index';


storiesOf('ProficienciesPane', module)
  .addDecorator((story, context) =>
    withInfo(ProficienciesPane.description)(story)(context),
  )
  .add('Proficiencies', () => (
    <ProficienciesPane
      proficiencyGroups={[
        { group: 'Armor', proficiencies: ['Light armor', 'Medium armor'] },
        {
          group: 'Weapons',
          proficiencies: ['Longbow', 'Shortsword', 'Simple weapons'],
        },
        { group: 'Tools', proficiencies: ["Brewer's supplies", 'Drums'] },
        { group: 'Languages', proficiencies: ['Common', 'Elvish'] },
      ]}
      onChange={console.log}
    />
  ));
