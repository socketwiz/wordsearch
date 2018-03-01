
import './hello-world.css';
import Main from '../../layouts/main';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

class HelloWorld extends Component {
    constructor(props) {
        super(props);

        this.state = {'value': ''};
    }

    onSubmit(event) {
        event.preventDefault();
 
        const {putMessage} = this.props;
        const {value} = this.state;

        if (typeof putMessage === 'function') {
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
        const {hellos} = this.props;
        const hellosPartial = map(hellos, (hello) => {
            return <div className="row" key={hello.id}>
                <div className="col-12">{hello.message}</div>
            </div>;
        });

        return (
            <Main>
                <div className="row">
                    <div className="col-12">
                        <a href="http://localhost:8000/explorer">Rest API Explorer</a>
                    </div>
                    <div className="col-12">
                        <hr />
                    </div>
                </div>
                {hellosPartial}
                <div className="row">
                    <div className="col-12">
                        <hr />
                    </div>
                    <div className="col-12">
                        <form onSubmit={this.onSubmit.bind(this)}>
                            <div className="form-group">
                                <label htmlFor="exampleInputMessage1">Message</label>
                                <input aria-describedby="messageHelp"
                                    className="form-control"
                                    id="exampleInputMessage1"
                                    onChange={this.handleChange.bind(this)}
                                    placeholder="Enter message"
                                    type="message" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        
                    </div>
                </div>
            </Main>
        );
    }
}

HelloWorld.propTypes = {
    'getMessage': PropTypes.func,
    'hellos': PropTypes.array,
    'putMessage': PropTypes.func
};

export default HelloWorld;
