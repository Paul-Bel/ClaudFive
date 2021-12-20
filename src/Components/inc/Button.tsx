import React from 'react';
import s from '../Ferst.module.css'


type ButtonPropsType = {
    num?: number,
    buttonControl?: () => void,
    min: number,
    max: number,
    name: string
    setButton?: () => void
    display: boolean
    buttonName: { buttonOne: string, buttonTwo: string, button: string }

}

export function Button({num, min, max, buttonName, name, ...props}: ButtonPropsType) {


    const buttonHandler = () => {
        if (props.buttonControl) {
            props.buttonControl()
        }
        if (props.setButton) {
            props.setButton()
        }
    }


    return (
        <span>

        <button
            className={s.buttonSet}
            disabled={
                (name === buttonName.buttonOne && !props.display)
                || (name === buttonName.buttonTwo && !props.display)
                || (name === buttonName.button && props.display)
                || (name === buttonName.buttonOne && num === max)
                || (name === buttonName.buttonTwo && num === min)
                || (min === -1)
                || (min === max)
            }

            onClick={buttonHandler}
        >
            {name}
        </button>
            </span>
    );
}


