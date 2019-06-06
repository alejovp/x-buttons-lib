import React from 'react';
import { XButton } from './components/XButton/XButton';


export const App = () => (
    <div>
        <h1>X Buttons Library</h1>
        <hr/>
        <hr/>
        <h3>OK Button:</h3>
        <div className="comp-cont">
            <XButton></XButton>
            <div className="code-cont">
                <span className="code-txt">{'<XButton></XButton>'}</span>
            </div>
        </div>
        <hr/>
        <h3>NOK Button:</h3>
        <div className="comp-cont">
            <XButton variant="nok"></XButton>
            <div className="code-cont">
                <span className="code-txt">{'<XButton variant="nok"></XButton>'}</span>
            </div>
        </div>
        <hr/>
    </div>
);