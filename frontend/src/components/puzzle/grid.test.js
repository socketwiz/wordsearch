/* global beforeEach describe expect it */

import '../../../setup';

import Grid from './grid';

describe('Grid component', () => {
  const size = 100;

  let newGrid = null;

  beforeEach(() => {
    const params = {
      'size': size
    };

    newGrid = new Grid(params);
  });

  it('should render a grid of given size', () => {
    expect(newGrid.length).toEqual(size);
  });

  it('should have only strings inserted at each location', () => {
    // 1st row, 100th column
    expect(typeof newGrid[0][size - 1].letter).toEqual('string');
    // 100th row, 100th column
    expect(typeof newGrid[size - 1][size - 1].letter).toEqual('string');
  });

  it('should not exceed its size', () => {
    // 101th row
    expect(typeof newGrid[size]).toEqual('undefined');
    // 1st row, 101th column
    expect(typeof newGrid[0][size]).toEqual('undefined');
    // 100th row, 101th column
    expect(typeof newGrid[size - 1][size]).toEqual('undefined');
  });
});

