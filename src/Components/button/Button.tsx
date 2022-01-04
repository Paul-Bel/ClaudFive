import React, {useState} from 'react';
import s from '../Ferst.module.css'

type ButtonPropsType = {
    buttonSetInc?: () => void,
    setButton?: () => void
    name: string
    changeSettings?: (set: boolean) => void
    disabled?: boolean
    onChange?: (name: string) => void

}

export function Button({name, ...props}: ButtonPropsType) {
    const buttonHandler = () => {
        if(props.onChange)props.onChange(name)
        if(props.setButton){props.setButton()}
        if(props.changeSettings){props.changeSettings(false)}
    }
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


