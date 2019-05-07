import React from 'react';

import wImg from './img/w1.png';


export const XButton = props => {
    const { children } = props;
    return (
        <button>
            <img src={wImg}/>
            {children}
        </button>
    );
};