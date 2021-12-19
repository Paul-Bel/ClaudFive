import React from 'react';
import s from '../Ferst.module.css'


type buttonProps = {
    num?: number,
    buttonControl?: () => void,
    name: string
    min: number,
    max: number,
    buttonName: { buttonOne: string, buttonTwo: string, button: string }
    setButton?: () => void
    mincoutn?: number
}

export function Button({num, name, min, max, buttonName, ...props}: buttonProps) {
    let {buttonOne, buttonTwo} = buttonName

    const buttonHandler = () => {
        if(props.buttonControl){props.buttonControl()}
        if (props.setButton){props.setButton()}
    }


    return (
        <span>
        <button
            className={s.buttonSet}
            disabled={
                (name === buttonOne && num === max)
                || (name === buttonTwo && num === min)
            || (name === "SET" && props.mincoutn === -1)}

            onClick={buttonHandler}
        >
            {name}
        </button>
            </span>
    );
}


