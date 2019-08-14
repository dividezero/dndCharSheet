/* global module */
import React from 'react';
import { storiesOf, withInfo } from '../../../.storybook/stories';

import StatCard from './index';

storiesOf('StatCard', module)
  .addDecorator((story, context) =>
    withInfo(StatCard.description)(story)(context),
  )
  .add('Movement speed stat card', () => (
    <StatCard value="55ft" bottomText=" Movement speed" />
  ))
  .add('Proficiency bonus stat card', () => (
    <StatCard value="+4" bottomText="Proficiency bonus" />
  ))
  .add('Initiative stat card', () => (
    <StatCard value="+1" bottomText="Initiative" />
  ));
