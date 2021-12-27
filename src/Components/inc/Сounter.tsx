import React from 'react';
import s from '../Ferst.module.css'

type ButtonPropsType = {
    min: number,
    max: number,
    num: number
    displey: boolean,
}
const div = {
    'margin' : 'auto',
    'font-size' : '35px',
}
const divSet = {
    'margin' : 'auto',
    'font-size' : '25px',
    'color': 'brown',
}

export function Counter({min, max, ...props}: ButtonPropsType) {

    const SetDispley = () => {
        return (
            <div style={divSet}>
                enter value
            </div>
        )
    }
    const ErrorDispl = () => {
        return(
            <div style={divSet}>
                Error
                enter correct value
            </div>
        )
    }
    return (
        <div style={div}
            className={props.num === max ? s.redFive : s.counter}>
            {props.displey ? props.num : (min === max || min === -1 || min > max) ? ErrorDispl() : SetDispley()}
        </div>
    );
}



