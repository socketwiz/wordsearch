
import './index.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import WordSearch from './containers/word-search';
import {Provider} from 'react-redux';
import React from 'react';
import {render} from 'react-dom';
import rootReducer from './reducers/index';

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const store = createStore(rootReducer, composeEnhancers());

render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={WordSearch} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
