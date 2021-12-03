import React from 'react';
import s from './Сounter.module.css'

type buttonProps = {
    num: number,
    buttonControl: () => void,
    name: string
    limitation: {min: number, max: number}
    buttonName: {buttonOne: string, buttonTwo: string}
}

export function Button({limitation, buttonName, ...props}: buttonProps) {
let {buttonOne, buttonTwo} = buttonName
let {min, max} = limitation

    return (
        <span className={s.span && s.spanO}>
        <button
            disabled={props.name === buttonOne && props.num === max || props.name === buttonTwo && props.num === min}
            className={s.button}
            onClick={props.buttonControl}>{props.name}</button>
            </span>
    );
}


