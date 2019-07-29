// layout utils. abstract to other file later when doing theming
export const cellWidth = 100;
export const cellMargin = 16;
export const getCardWidth = numCells =>
  numCells * cellWidth + (numCells - 1) * cellMargin;

export const getCardDefaults = (width = 1, height) => ({
  elevation: 1,
  floatL: 'left',
  width: getCardWidth(width),
  height: height ? getCardWidth(height) : undefined,
  margin: cellMargin,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

export default {
  cellWidth,
  cellMargin,
  getCardWidth,
  getCardDefaults,
};
