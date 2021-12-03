import React, {useState} from 'react';
import s from './Сounter.module.css'
import {Button} from "./Button";
import {Counters} from "./Сounter";

type buttonProps = {
    num: number,
    buttonControl: (e: string) => void,
}

export function Counter(props: buttonProps) {
    let buttonOne = "INC"
    let buttonTwo = "RESET"
    return (
        <div className={s.counterFather}>

            <Counters num={props.num}/>
            <div className={s.buttuns}>
                <Button
                    num={props.num}
                    buttonControl={() => props.buttonControl(buttonOne)}
                    name={buttonOne}/>
                <Button
                    num={props.num}
                    buttonControl={() => props.buttonControl(buttonTwo)}
                    name={buttonTwo}/>
            </div>
        </div>
    );
}


