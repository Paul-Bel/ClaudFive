import React, {useState} from 'react';
import s from '../Ferst.module.css'

type ButtonPropsType = {
    num?: number,
    buttonSetInc?: () => void,
    min?: number,
    max?: number,
    setButton?: () => void
    display?: boolean
    name: string
    // buttonName: { buttonOne: string, buttonTwo: string, button: string }
    changeSettings?: () => void
    settings?: boolean
    disabled?: boolean
    onChange?: (name: string) => void
}

export function Button({name, ...props}: ButtonPropsType) {
    const buttonHandler = () => {
        if(props.onChange)props.onChange(name)
        if(props.setButton){props.setButton()}
    }
    // const disebled = (name === buttonName.buttonTwo && !props.display)
    //     || (name === buttonName.button && props.display)
    //     || (name === buttonName.buttonOne && num === max)
    //     || (name === buttonName.buttonTwo && num === min)
    //     || (min === -1)
    //     || (min === max)
    // console.log(`display ${props.display}, disabled ${disebled}, id ${props.settings}`)
    return (
        <button
            className={props.disabled ? s.disabled : s.buttonSet}
            disabled={props.disabled}
            onClick={buttonHandler}
        >
            {name}

        </button>
    );
}


