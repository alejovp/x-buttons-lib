import React from 'react';
import wImg from './img/w1.png';
import wImgNo from './img/w2.png';

import './XButton.scss';


export const XButton = props => {
    const { children, variant } = props;

    return (
        <button className="x-btn">
            <img className="x-img"
                 src={variant === 'nok' ? wImgNo : wImg}
            />
                {children}
        </button>
    );
};