import React from 'react';
import s from './ClaudCounter.module.css'
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

        <div className={s.item}>

            <div className={s.displey}>

                <Counter num={props.num} min={props.min} max={props.max}/>
            </div>

            <div  className={s.button}>
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


