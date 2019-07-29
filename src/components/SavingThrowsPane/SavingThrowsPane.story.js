/* global module */
import React from 'react';
import { storiesOf, withInfo } from '../../../.storybook/stories';

import SavingThrowsPane from './index';

storiesOf('SavingThrowsPane', module)
  .addDecorator((story, context) =>
    withInfo(SavingThrowsPane.description)(story)(context),
  )
  .add('Saving throws', () => (
    <SavingThrowsPane savingThrows={{ STR: '+2',
      DEX: '+2',
      CON: '+2',
      INT: '+2',
      WIS: '+2',
      CHA: '+2',
    }} />
  ));
