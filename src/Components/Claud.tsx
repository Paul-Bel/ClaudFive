import React from 'react';
import s from './Сounter.module.css'
import {Button} from "./Button";
import {Counter} from "./Сounter";


type buttonProps = {
    num: number,
    buttonControl: (e: string) => void,
    limitation: {min: number, max: number}
    buttonName: {buttonOne: string, buttonTwo: string}
}

export function Claud({buttonName, ...props}: buttonProps) {

    return (

        <div className={s.counterFather}>

            <Counter num={props.num} limitation={props.limitation}/>
            <div className={s.buttuns}>
                <Button
                    num={props.num}
                    buttonControl={() => props.buttonControl(buttonName.buttonOne)}
                    name={buttonName.buttonOne}
                    limitation={props.limitation}
                    buttonName={buttonName}
                />
                <Button
                    num={props.num}
                    buttonControl={() => props.buttonControl(buttonName.buttonTwo)}
                    name={buttonName.buttonTwo}
                    limitation={props.limitation}
                    buttonName={buttonName}
                />
            </div>
        </div>
    );
}


