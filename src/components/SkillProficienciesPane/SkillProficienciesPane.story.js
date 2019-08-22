/* global module */
import React from 'react';
import { storiesOf, withInfo } from '../../../.storybook/stories';

import SkillProficienciesPane from './index';

import skills from '../../stubs/skills'

storiesOf('SkillProficienciesPane', module)
  .addDecorator((story, context) =>
    withInfo(SkillProficienciesPane.description)(story)(context),
  )
  .add('SkillProficiencies', () => (
    <SkillProficienciesPane skills={skills} />
  ));
