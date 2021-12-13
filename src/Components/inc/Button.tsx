import React from 'react';
import s from './Сounter.module.css'

type buttonProps = {
    num?: number,
    buttonControl?: () => void,
    name: string
    min: number,
    max: number,
    buttonName: {buttonOne: string, buttonTwo: string, button: string}
}

export function Button({min, max, buttonName, ...props}: buttonProps) {
let {buttonOne, buttonTwo, button} = buttonName


    return (
        <span className={s.span && s.spanO}>
        <button
            disabled={props.name === buttonOne && props.num === max || props.name === buttonTwo && props.num === min}
            className={s.button}
            onClick={props.buttonControl}>{props.name}</button>
            </span>
    );
}


