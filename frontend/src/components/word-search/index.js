
import Game from '../game';
import Main from '../../layouts/main';
import React, {Component} from 'react';

class WordSearch extends Component {
  render() {
    const words = [
      'BUG SPRAY',
      'CAMPSITE',
      'CANOPY',
      'CHARCOAL',
      'FIRST-AID KIT',
      'FLASHLIGHT',
      'FOLDING CHAIR',
      'GAS CANISTER',
      'GAS COOKER',
      'HIKING BOOTS',
      'LANTERN',
      'MOSQUITO NET',
      'PEGS',
      'PICNIC TABLE',
      'POTS AND PANS',
      'ROPE',
      'SLEEPING BAG',
      'STAKE',
      'TENT',
      'THERMOS',
      'TRAILER'
    ];

    return (
      <Main>
        <Game words={words} />
      </Main>
    );
  }
}

export default WordSearch;
