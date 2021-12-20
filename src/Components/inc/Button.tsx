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
    displey?: boolean

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
            || (name === "SET" && min === -1)
                || (name === "SET" && min === max)
            || (name === (buttonOne || buttonTwo) && !props.displey)
            }

            onClick={buttonHandler}
        >
            {name}
        </button>
            </span>
    );
}


