/* global describe expect it */

import '../../setup';

import reducer from './word-search';
import * as types from '../actions/word-search';

describe('WordSearch reducers', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            'wordSearches': []
        });
    });

    it('should handle UPDATE_WORD_SEARCHES', () => {
        const testStr = 'word-search';

        expect(
            reducer({'wordSearches': []}, {
                'type': types.UPDATE_WORD_SEARCH,
                'wordSearch': testStr
            })
        ).toEqual({
            'wordSearches': [testStr]
        });
    });

    it('should handle UPDATE_WORD_SEARCHES', () => {
        const testStr = 'word-search';

        expect(
            reducer({'wordSearches': []}, {
                'type': types.UPDATE_WORD_SEARCHES,
                'wordSearches': testStr
            })
        ).toEqual({
            'wordSearches': testStr
        });
    });
});
