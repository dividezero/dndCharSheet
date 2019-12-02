import React from 'react';
import PropTypes from 'prop-types';

import { Pane } from 'evergreen-ui';
import { cellMargin, getCardWidth } from '../../theme/layout';

// Declare a component that returns an HTML button with the given properties
const Card = ({
  cellWidth,
  cellHeight,
  isRowDirection,
  justifyContent,
  children,
  background,
}) => {
  return (
    <Pane
      elevation={1}
      float="left"
      width={getCardWidth(cellWidth)}
      height={getCardWidth(cellHeight)}
      margin={cellMargin}
      padding={20}
      display="flex"
      justifyContent={justifyContent || 'center'}
      alignItems="center"
      flexDirection={isRowDirection ? 'row' : 'column'}
      background={background}
      backgroundColor={!background && 'white'}
      borderRadius={4}
    >
      {children}
    </Pane>
  );
};

// Description - appears in the storybook item
Card.description = `
Ability Score displays should display the score and roll modifiers based on the score
`;

// This allows for the definition of rules that each prop type has to follow in order to be used properly
Card.propTypes = {
  /** Text that will appear in the button
     This will default to 'I am a button' if not present */
  cellWidth: PropTypes.number,
  cellHeight: PropTypes.number,
  children: PropTypes.node.isRequired,
  isRowDirection: PropTypes.bool,
  justifyContent: PropTypes.string,
  background: PropTypes.string,
};

// What properties the component should have when nothing is defined
Card.defaultProps = {
  cellWidth: 1,
  cellHeight: undefined,
  justifyContent: undefined,
  background: undefined,
  isRowDirection: false,
};

export default Card;
