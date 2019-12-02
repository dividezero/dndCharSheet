export const getModifier = score => Math.floor((score - 10) / 2);

export const formatModifier = modifier =>
  modifier > 0 ? `+${modifier}` : modifier;

export const calculateInitiative = (dexScore, format = true) =>
  format ? formatModifier(getModifier(dexScore)) : getModifier(dexScore);
