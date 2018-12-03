
import './board.css';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Square from '../square';

class Board extends Component {
  renderSquare(character, index) {
    const key = `col-${index}`;

    return (
      <Square
        key={key}
        onClick={() => this.props.onClick()}
        value={character}
      />
    );
  }

  renderRows() {
    const {squares} = this.props;

    let renderedSquares = [];
    let rows = [];
    
    squares.forEach((currentValue, index) => {
      const key = `row-${index}`;

      renderedSquares = renderedSquares.concat(this.renderSquare(currentValue, index));

      if ((index + 1) % 15 === 0) {
        const row = <div className="row" key={key}>
          {renderedSquares}
        </div>;

        renderedSquares = [];

        rows = rows.concat(row);
      }
    });

    return rows;
  }

  render() {
    return (
        this.renderRows()
    );
  }
}

Board.propTypes = {
  'squares': PropTypes.array
};

export default Board;
