export const getModifier = score => (score - 10) / 2;

export const formatModifier = modifier =>
  modifier > 0 ? `+${modifier}` : modifier;

export default { getModifier, formatModifier };
