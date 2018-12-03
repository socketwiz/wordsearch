
import './game.css';

import {alphabet} from '../../constants';
import Board from '../board';
import random from 'lodash/random';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import times from 'lodash/times';

class Game extends Component {
  constructor(props) {
    super(props);

    const grid = 225;
    const letters = 25;
    const squares = ((count) => {
      return times(count, () => {
        const character = random(0, letters);

        return alphabet[character];
      })
    })(grid);

    this.state = {
      'squares': squares
    };
  }

  componentDidMount() {
  }

  render() {
    const {squares} = this.state;
    const title = 'Gone Camping';
    const {words} = this.props;
    const wordList = words.map((word, index) => {
      return <li className="word" key={`word-${index}`}>{index + 1}. {word}</li>;
    });

    return (
      <div>
        <div className="title">
          {title}
        </div>
        <div className="board">
          <Board squares={squares} />
        </div>
        <ul className="word-list">
          {wordList}
        </ul>
      </div>
    );
  }
}

Game.propTypes = {
  'words': PropTypes.array
};

export default Game;
