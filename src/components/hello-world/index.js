
import './hello-world.css';
import Main from '../../layouts/main';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

class HelloWorld extends Component {
    render() {
        return (
            <Main>
                Hello World
            </Main>
        );
    }
}

HelloWorld.propTypes = {
};

export default HelloWorld;
