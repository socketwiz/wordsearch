
import Main from '../../layouts/main';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

class WordSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {'value': ''};
    }

    onSubmit(event) {
        event.preventDefault();
 
        const {putMessage} = this.props;
        const {value} = this.state;

        if (typeof putMessage === 'function') {
            console.log(this.state);
            putMessage({'message': value}).catch(error => {
                console.error(error);
            });
        }
    }

    componentDidMount() {
        const {getMessage} = this.props;

        if (typeof getMessage === 'function') {
            getMessage().catch(error => {
                console.error(error);
            });
        }
    }

    handleChange(event) {
        this.setState({value: event.currentTarget.value});
    }

    render() {
        const {wordSearches} = this.props;
        const wordSearchesPartial = map(wordSearches, (wordSearch) => {
            return <p key={wordSearch.id}>{wordSearch.message}</p>;
        });

        return (
            <Main>
                <p>
                    <a href="http://localhost:8000/explorer">Rest API Explorer</a>
                </p>
                <hr />
                {wordSearchesPartial}
                <hr />
                <form onSubmit={this.onSubmit.bind(this)}>
                    <p>
                        <label htmlFor="exampleInputMessage1">Message</label>
                        <input aria-describedby="messageHelp"
                            className="form-control"
                            id="exampleInputMessage1"
                            onChange={this.handleChange.bind(this)}
                            placeholder="Enter message"
                            type="message" />
                    </p>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </Main>
        );
    }
}

WordSearch.propTypes = {
    'getMessage': PropTypes.func,
    'wordSearches': PropTypes.array,
    'putMessage': PropTypes.func
};

export default WordSearch;
