
import {connect} from 'react-redux';
import HelloWorld from '../components/hello-world';
import {withRouter} from 'react-router';

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

const HelloWorldApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(HelloWorld);

export default withRouter(HelloWorldApp);
