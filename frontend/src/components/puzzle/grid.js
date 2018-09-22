
import cloneDeep from 'lodash/cloneDeep';

import {alphabet} from '../../constants.js';

const cell = {
  'letter': ''
};

function Grid(params) {
  this.size = params.size;

  return Array(this.size).fill(0).map(() => {
    return Array(this.size).fill(0).map((currentValue, index) => {
      const newCell = cloneDeep(cell);

      newCell.letter = this.getRandomLetter();

      return newCell;
    });
  });
}

Grid.prototype.getRandomLetter = function getRandomLetter() {
  const randomInt = Math.floor(Math.random() * Math.floor(25));

  return alphabet[randomInt];
};

export default Grid;
