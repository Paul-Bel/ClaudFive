import React from 'react';
import s from './Сounter.module.css'
import {Button} from "./Button";
import {Counter} from "./Сounter";


type buttonProps = {
    num: number,
    buttonControl: (e: string) => void,
    min: number,
    max: number,
    buttonName: {buttonOne: string, buttonTwo: string, button: string}
}

export function ClaudCounter({buttonName, ...props}: buttonProps) {

    return (

        <div className={s.counterFather}>

            <Counter num={props.num} min={props.min} max={props.max}/>

            <div className={s.buttuns}>
                <Button
                    num={props.num}
                    buttonControl={() => props.buttonControl(buttonName.buttonOne)}
                    name={buttonName.buttonOne}
                    min={props.min}
                    max={props.max}
                    buttonName={buttonName}
                />
                <Button
                    num={props.num}
                    buttonControl={() => props.buttonControl(buttonName.buttonTwo)}
                    name={buttonName.buttonTwo}
                    min={props.min}
                    max={props.max}
                    buttonName={buttonName}
                />
            </div>
        </div>
    );
}


