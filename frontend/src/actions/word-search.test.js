/* global describe, expect, it */

import * as actions from './word-search';
import {UPDATE_WORD_SEARCH, UPDATE_WORD_SEARCHES} from './word-search';

describe('WordSearch actions', () => {
    it('should create an action to update word search', () => {
        const text = 'word search';
        const expectedAction = {
            'type': UPDATE_WORD_SEARCH,
            'wordSearch': text
        };

        expect(actions.updateWordSearch(text)).toEqual(expectedAction);
    });
    it('should create an action to update wordSearches', () => {
        const text = 'word search';
        const expectedAction = {
            'type': UPDATE_WORD_SEARCHES,
            'wordSearches': text
        };

        expect(actions.updateWordSearches(text)).toEqual(expectedAction);
    });
});
