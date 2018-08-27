
import {UPDATE_WORD_SEARCH, UPDATE_WORD_SEARCHES} from '../actions/word-search';

const initialState = {
    'wordSearches': []
};

function wordSearchReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_WORD_SEARCH:
            return {'wordSearches': state.wordSearches.concat(action.wordSearch)};
        case UPDATE_WORD_SEARCHES:
            return Object.assign({}, state, {
                'wordSearches': action.wordSearches
            });

        default:
            return state;
    }
}

export default wordSearchReducer;
