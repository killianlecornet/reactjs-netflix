import React from 'react';

const Button = (props) => {
    return (
        <button type={props.type} onClick={props.function} className={props.classes}>
            {props.title}
        </button>
    );
}

export default Button;
