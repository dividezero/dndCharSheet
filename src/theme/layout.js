// layout utils. abstract to other file later when doing theming
export const cellWidth = 100;
export const cellMargin = 16;
export const getCardWidth = numCells =>
  numCells * cellWidth + (numCells - 1) * cellMargin;

export default {
  cellWidth,
  cellMargin,
  getCardWidth,
};
