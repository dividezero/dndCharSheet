/* global module */
import React from 'react';
import { storiesOf, withInfo } from '../../../.storybook/stories';

import HealthCard from './index';

storiesOf('HealthCard', module)
  .addDecorator((story, context) =>
    withInfo(HealthCard.description)(story)(context),
  )
  .add('Default health card', () => (
    <HealthCard
      current={30}
      max={40}
      onDamage={amt => console.log(`Took ${amt} damage!`)}
      onHeal={amt => console.log(`Healed ${amt} damage!`)}
    />
  ));
