import React from 'react';
import PropTypes from 'prop-types';

import { Strong } from 'evergreen-ui';
import { formatModifier } from '../../utils';

// Declare a component that returns an HTML button with the given properties
const Modifier = props => {
  const { children } = props;
  return <Strong>{formatModifier(children)}</Strong>;
};

Modifier.description = `
Modifier formats numbers to a roll modifier
`;

Modifier.propTypes = {
  children: PropTypes.number.isRequired,
};

// What properties the component should have when nothing is defined
Modifier.defaultProps = {};

export default Modifier;
