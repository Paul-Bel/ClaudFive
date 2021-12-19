import React from 'react';
import s from '../Ferst.module.css'

type ButtonPropsType = {
    num: number,
    min: number,
    max: number,
}
const div = {
    'margin' : 'auto',
    'font-size' : '35px',
}
export function Counter({min, max, ...props}: ButtonPropsType) {
    return (<div
            style={div}
            className={props.num === max ? s.redFive : s.counter}>
            {props.num}
        </div>
    );
}


