
import './hello-world.css';
import Main from '../../layouts/main';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

class HelloWorld extends Component {
    componentDidMount() {
        const {getMessage} = this.props;

        if (typeof getMessage === 'function') {
            getMessage();
        }
    }

    render() {
        const {message} = this.props;

        return (
            <Main>
                {message}
            </Main>
        );
    }
}

HelloWorld.propTypes = {
    'getMessage': PropTypes.func,
    'message': PropTypes.string
};

export default HelloWorld;
