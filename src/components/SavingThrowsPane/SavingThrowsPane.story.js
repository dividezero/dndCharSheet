/* global module */
import React from 'react';
import { storiesOf, withInfo } from '../../../.storybook/stories';

import SavingThrowsPane from './index';

storiesOf('SavingThrowsPane', module)
  .addDecorator((story, context) =>
    withInfo(SavingThrowsPane.description)(story)(context),
  )
  .add('Saving throws', () => (
    <SavingThrowsPane
      savingThrows={{
        STR: {
          proficiency: 'expertise',
          value: '+7',
        },
        DEX: {
          proficiency: 'proficient',
          value: '+5',
        },
        CON: {
          proficiency: 'not',
          value: '+2',
        },
        INT: {
          proficiency: 'not',
          value: '+2',
        },
        WIS: {
          proficiency: 'not',
          value: '+2',
        },
        CHA: {
          value: '+2',
        },
      }}
    />
  ));
