
import {checkStatus, fetchJSON} from '../base';
import {connect} from 'react-redux';
import WordSearch from '../components/word-search';
import {updateWordSearch, updateWordSearches} from '../actions/word-search';
import {withRouter} from 'react-router';
import 'whatwg-fetch';

const mapStateToProps = state => {
    return {
        'wordSearches': state.wordSearchReducer.wordSearches
    };
};

const mapDispatchToProps = dispatch => {
    return {
        'getMessage': () => {
            return fetch('/api/WordSearches')
                .then(checkStatus)
                .then(fetchJSON)
                .then(data => {
                    if (data) {
                        dispatch(updateWordSearches(data));
                    }
                });
        },
        'putMessage': (value) => {
            const options = {
                'method': 'post',
                'headers': {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                'body': JSON.stringify(value)
            };

            return fetch('/api/WordSearches', options)
                .then(checkStatus)
                .then(fetchJSON)
                .then(data => {
                    if (data) {
                        dispatch(updateWordSearch(data));
                    }
                });
        }
    };
};

const WordSearchApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(WordSearch);

export default ((env) => {
    if (env === 'test') {
        return WordSearchApp;
    } else {
        return withRouter(WordSearchApp);
    }
})(process.env.NODE_ENV);
