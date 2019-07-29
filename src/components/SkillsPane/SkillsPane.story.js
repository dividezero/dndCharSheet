/* global module */
import React from 'react';
import { storiesOf, withInfo } from '../../../.storybook/stories';

import SkillsPane from './index';

import skills from '../../models/skills'

storiesOf('SkillsPane', module)
  .addDecorator((story, context) =>
    withInfo(SkillsPane.description)(story)(context),
  )
  .add('Skills', () => (
    <SkillsPane skills={skills} />
  ));
