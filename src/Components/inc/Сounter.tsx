import React from 'react';
import s from '../Ferst.module.css'

type ButtonPropsType = {
    min: number,
    max: number,
    num: number
    displey: boolean,
}

export function Counter({min, max, ...props}: ButtonPropsType) {

    const SetDispley = () => {
        return (
            <div
                className={s.divSet}>
                enter value
            </div>
        )
    }
    const ErrorDispl = () => {
        return(
            <div
                className={s.divSet}>
                Error
                enter correct value
            </div>
        )
    }
    return (
        <div
            // style={div}
            className={props.num === max ? s.redFive : s.counter}>
            {props.displey ? props.num : (min === max || min === -1 || min > max) ? ErrorDispl() : SetDispley()}
        </div>
    );
}



