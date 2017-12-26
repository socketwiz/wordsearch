
import {checkStatus, fetchJSON} from '../base';
import {connect} from 'react-redux';
import HelloWorld from '../components/hello-world';
import {updateMessage} from '../actions/hello-world';
import {withRouter} from 'react-router';
import 'whatwg-fetch';

const mapStateToProps = state => {
    return {
        'message': state.helloWorldReducer.message
    };
};

const mapDispatchToProps = dispatch => {
    return {
        'getMessage': () => {
            return fetch('/api-v1/hello')
                .then(checkStatus)
                .then(fetchJSON)
                .then(data => {
                    if (data) {
                        dispatch(updateMessage(data.message));
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        }
    };
};

const HelloWorldApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(HelloWorld);

export default withRouter(HelloWorldApp);
