
export const UPDATE_WORD_SEARCH = 'UPDATE_WORD_SEARCH';
export const UPDATE_WORD_SEARCHES = 'UPDATE_WORD_SEARCHES';

export function updateWordSearch(wordSearch) {
    return {
        'type': UPDATE_WORD_SEARCH,
        'wordSearch': wordSearch
    };
}
export function updateWordSearches(wordSearches) {
    return {
        'type': UPDATE_WORD_SEARCHES,
        'wordSearches': wordSearches
    };
}
