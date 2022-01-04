import React, {useState} from 'react';
import s from '../Ferst.module.css'

type ButtonPropsType = {
    num?: number,
    buttonSetInc?: () => void,
    min?: number,
    max?: number,
    name: string
    setButton?: () => void
    display?: boolean
    buttonName: { buttonOne: string, buttonTwo: string, button: string }
    changeSettings?: () => void
    settings?: boolean
}

export function Button({num, min, max, buttonName, name, ...props}: ButtonPropsType) {
    const buttonHandler = () => {
        if (props.buttonSetInc) {
            props.buttonSetInc()
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
    console.log(`display ${props.display}, disabled ${disebled}, id ${props.settings}`)
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


