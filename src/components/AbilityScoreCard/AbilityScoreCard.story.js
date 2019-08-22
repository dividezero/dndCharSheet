/* global module */
import React from 'react';
import { storiesOf, withInfo } from '../../../.storybook/stories';

import AbilityScoreCard from './index';

import stats from '../../stubs/stats';

storiesOf('AbilityScoreCard', module)
  .addDecorator((story, context) =>
    withInfo(AbilityScoreCard.description)(story)(context),
  )
  .add('Primary score card', () => <AbilityScoreCard name="Dex" value={12} />)
  .add('All', () => {
    const keys = Object.keys(stats);
    return keys.map(key => {
      const { name } = stats[key];
      return <AbilityScoreCard name={name} value={12} />;
    });
  });
