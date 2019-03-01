import React from 'react';

const Image = (props) => {

    return (
        <li className="img-wrapper">
            <img src={props.src} alt="" /> 
        </li>
    );
}

export default Image;