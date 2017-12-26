
import {UPDATE_MESSAGE} from '../actions/hello-world';

const initialState = {
    'message': ''
};

function helloWorldReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_MESSAGE:
            return Object.assign({}, state, {
                'message': action.message
            });

        default:
            return state;
    }
}

export default helloWorldReducer;
