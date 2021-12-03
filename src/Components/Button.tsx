import React, {useState} from 'react';
import s from './Сounter.module.css'


type nameType = "INC" | "RESET"

type buttonProps = {
    num: number,
    buttonControl: () => void,
    name: string
}

export function Button(props: buttonProps) {
    return (
        <span className={s.span && s.spanO}>
        <button
            disabled={props.name === "INC" && props.num === 5 || props.name === "RESET" && props.num === 0}
            className={s.button}
            onClick={props.buttonControl}>{props.name}</button>
            </span>
    );
}


