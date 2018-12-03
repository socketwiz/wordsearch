
import './squares.css';
import React from 'react';

function Square(props) {
    return (
        <span className="square">
            {props.value}
        </span>
    );
}

export default Square;
