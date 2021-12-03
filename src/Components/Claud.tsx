import React, {useState} from 'react';
import s from './Сounter.module.css'
import {Button} from "./Button";
import {Counters} from "./Сounters";

type buttonProps = {
    num: number,
    buttonControl: (e: string) => void,
}

export function Counter(props: buttonProps) {
    return (
        <div className={s.counterFather}>
            <Counters num={props.num}/>
            <div className={s.buttuns}>

                <Button
                    num={props.num}
                    buttonControl={() => props.buttonControl('i')}
                    name={"INC"}/>

                <Button
                    num={props.num}
                    buttonControl={() => props.buttonControl('r')}
                    name={"RESET"}/>



            </div>
        </div>
    );
}


