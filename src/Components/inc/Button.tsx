import React from 'react';
import s from '../Ferst.module.css'


type ButtonPropsType = {
    num?: number,
    buttonControl?: () => void,
    min?: number,
    max?: number,
    name: string
    setButton?: () => void
    display?: boolean
    buttonName: { buttonOne: string, buttonTwo: string, button: string }
    id?: boolean
    changeSettings?: ()=>void
    active: boolean
}

export function Button({num, min, max, buttonName, name, ...props}: ButtonPropsType) {


    const buttonHandler = () => {
        if (props.buttonControl) {
            props.buttonControl()
        }
        if (props.setButton) {
            props.setButton()
        }
        if(props.changeSettings){props.changeSettings()}
    }


    return (

        <button
            className={s.buttonSet}
            disabled={
             props.active &&
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

    );
}


