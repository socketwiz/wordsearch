
import React, {Component} from 'react';
import Footer from '../components/footer.js';
import Header from '../components/header.js';
import PropTypes from 'prop-types';

export default class Main extends Component {
    render() {
        const {children} = this.props;

        return <div className="container">
            <Header />

            <div className="main">
                {children}
            </div>

            <Footer />
        </div>;
    }
}

Main.propTypes = {
    'children': PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
        PropTypes.string
    ])
};
