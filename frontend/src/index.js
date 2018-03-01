
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import HelloWorld from './containers/hello-world';
import {Provider} from 'react-redux';
import React from 'react';
import {render} from 'react-snapshot';
import rootReducer from './reducers/index';

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const store = createStore(rootReducer, composeEnhancers());

render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HelloWorld} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
