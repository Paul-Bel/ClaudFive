import React from 'react';
import s from './Сounter.module.css'


type buttonProps = {
    num: number,
    min: number,
    max: number,
}

export function Counter({min, max, ...props}: buttonProps) {
    return (<div
            className={props.num === max ? s.redFive : s.counter}>
            {props.num}
        </div>
    );
}


