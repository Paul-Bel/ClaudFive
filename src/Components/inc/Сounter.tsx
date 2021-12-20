import React from 'react';
import s from '../Ferst.module.css'

type ButtonPropsType = {
    min: number,
    max: number,
    num: number
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
    return (<div
            style={div}
            className={props.num === max ? s.redFive : s.counter}>
            {props.num}
        </div>
    );
}

export const SetDispley = () => {

    return (
        <div style={divSet}>
            Enter Yor Increments
        </div>
    )
}


