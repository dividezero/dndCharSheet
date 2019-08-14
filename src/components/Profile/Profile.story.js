/* global module */
import React from 'react';
import { storiesOf, withInfo } from '../../../.storybook/stories';

import Profile from './index';

storiesOf('Profile', module)
  .addDecorator((story, context) =>
    withInfo(Profile.description)(story)(context),
  )
  .add('Default profile', () => (
    <Profile
      name="Tess Pearsons"
      race="Half Elf"
      classes={[{ class: 'Fighter', level: 5 }, { class: 'Rouge', level: 2 }]}
    />
  ));
