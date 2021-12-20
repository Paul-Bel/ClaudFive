import React, {useState} from 'react';
import s from './ClaudCounter.module.css'
import {Button} from "./Button";
import {Counter} from "./Сounter";


type buttonProps = {
    num: number,
    buttonControl: (e: string) => void,
    min: number,
    max: number,
    buttonName: {buttonOne: string, buttonTwo: string, button: string}
    displey: boolean
}

export function ClaudCounter({buttonName, ...props}: buttonProps) {


    return (

        <div className={s.item}>

            <div className={s.displey}>
                <Counter min={props.min}  max={props.max} num={props.num} displey={props.displey}/>
            </div>

            <div  className={s.button}>
                <Button
                    num={props.num}
                    buttonControl={() => props.buttonControl(buttonName.buttonOne)}
                    name={buttonName.buttonOne}
                    min={props.min}
                    max={props.max}
                    buttonName={buttonName}
                    displey={props.displey}
                />
                <Button
                    num={props.num}
                    buttonControl={() => props.buttonControl(buttonName.buttonTwo)}
                    name={buttonName.buttonTwo}
                    min={props.min}
                    max={props.max}
                    buttonName={buttonName}
                    displey={props.displey}
                />
            </div>
        </div>
    );
}


