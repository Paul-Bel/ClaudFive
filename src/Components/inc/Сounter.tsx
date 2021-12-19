import React from 'react';
import s from '../Ferst.module.css'

type ButtonPropsType = {
    num: number,
    min: number,
    max: number,
}
export function Counter({min, max, ...props}: ButtonPropsType) {
    return (<div
            className={props.num === max ? s.redFive : s.counter}>
            {props.num}
        </div>
    );
}


