import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Pane, Button, TextInput, Text, Heading } from 'evergreen-ui';
import Card from '../Card';

import { cellMargin } from '../../theme/layout';

import './HealthCard.css';

const HealthPane = ({ text, amount }) => (
  <Pane marginRight={cellMargin}>
    <Text>{text}</Text>
    <Heading size={700}>{amount}</Heading>
  </Pane>
);
HealthPane.propTypes = {
  text: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

// Declare a component that returns an HTML button with the given properties
const HealthCard = ({ current, max, temp, onHeal, onDamage }) => {
  const [amount, setAmount] = useState(0);
  return (
    <Card
      cellWidth={3}
      cellHeight={1}
      isRowDirection
      justifyContent="space-around"
    >
      <Pane
        display="flex"
        flexDirection="column"
        width={80}
        marginRight={cellMargin}
      >
        <Button
          intent="success"
          appearance="minimal"
          onClick={() => {
            onHeal(amount);
          }}
        >
          Heal
        </Button>
        <TextInput
          type="number"
          placeholder="Amount..."
          onChange={e => setAmount(e.target.value)}
          width={80}
        />
        <Button
          intent="danger"
          appearance="minimal"
          onClick={() => {
            onDamage(amount);
          }}
        >
          Damage
        </Button>
      </Pane>
      <Pane display="flex" flexDirection="column">
        <Heading>Hit Points</Heading>
        <Pane display="flex" flexDirection="row" justifyItems="flex-end">
          <HealthPane text="Current" amount={current} />
          <HealthPane text="Max" amount={max} />
          <HealthPane text="Temp" amount={temp} />
        </Pane>
      </Pane>
    </Card>
  );
};

// Description - appears in the storybook item
HealthCard.description = `
Score Cards should display a small card for a specific stat
`;

// This allows for the definition of rules that each prop type has to follow in order to be used properly
HealthCard.propTypes = {
  /** Text that will appear in the button
     This will default to 'I am a button' if not present */
  current: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  temp: PropTypes.number,
  onHeal: PropTypes.func,
  onDamage: PropTypes.func,
};

// What properties the component should have when nothing is defined
HealthCard.defaultProps = {
  temp: 0,
  onHeal: () => {},
  onDamage: () => {},
};

export default HealthCard;
