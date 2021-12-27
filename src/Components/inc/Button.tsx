import React, {useState} from 'react';
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
    changeSettings?: () => void
}

export function Button({num, min, max, buttonName, name, ...props}: ButtonPropsType) {
    const buttonHandler = () => {
        if (props.buttonControl) {
            props.buttonControl()
        }
        if (props.setButton) {
            props.setButton()
        }
        if (props.changeSettings) {
            props.changeSettings()
        }
    }
    const disebled = (name === buttonName.buttonTwo && !props.display)
        || (name === buttonName.button && props.display)
        || (name === buttonName.buttonOne && num === max)
        || (name === buttonName.buttonTwo && num === min)
        || (min === -1)
        || (min === max)



    return (
        <button
            className={disebled ? s.disabled : s.buttonSet}
            disabled={disebled}
            onClick={buttonHandler}
        >
            {name}
        </button>
    );
}


