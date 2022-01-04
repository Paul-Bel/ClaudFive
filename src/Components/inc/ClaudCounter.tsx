import s from './ClaudCounter.module.css'
import {Button} from "../button/Button";
import {Counter} from "./Сounter";
import React from "react";

type buttonProps = {
    counterValue: { min: number, max: number, num: number }
    buttonSetInc: (e: string) => void,
    buttonName: { buttonOne: string, buttonTwo: string, button: string }
    displey: boolean
    settings?: boolean
    changeSettings?: () => void
}

export function ClaudCounter({buttonName, counterValue, ...props}: buttonProps) {

    // const disabled = (buttonName.buttonTwo && !props.displey)
        // || (buttonName.button && props.displey)
        // || (buttonName.buttonOne && counterValue.num === counterValue.max)
        // || (buttonName.buttonTwo && counterValue.num === counterValue.min)
        // || (counterValue.min === -1)
        // || (counterValue.min === counterValue.max)
    const disabledInc = counterValue.num === counterValue.max || (counterValue.min === -1)
    const disabledReset = counterValue.num === counterValue.min || (counterValue.min === -1)
    const disabledSet = !props.displey || (counterValue.min === -1)

    const onChange = (name: string) => {
         props.buttonSetInc(name)
        if(name === buttonName.button){
        if(props.changeSettings) {props.changeSettings()}}
    }
    return (
        <div className={s.item}>
            <div className={s.displey}>
                <Counter min={counterValue.min} max={counterValue.max} num={counterValue.num} displey={props.displey}/>
            </div>
            <div className={s.button}>
                <Button
                    buttonSetInc={() => props.buttonSetInc(buttonName.buttonOne)}
                    display={props.displey}
                    name={buttonName.buttonOne}
                    disabled={disabledInc}
                    onChange={onChange}
                />
                <Button
                    buttonSetInc={() => props.buttonSetInc(buttonName.buttonTwo)}
                    display={props.displey}
                    name={buttonName.buttonTwo}
                    disabled={disabledReset}
                    onChange={onChange}
                />
                {props.settings &&
                <Button
                    changeSettings={props.changeSettings}
                    name={buttonName.button}
                    settings={props.settings}
                    disabled={disabledSet}
                    onChange={onChange}
                />}
            </div>
        </div>
    );
}


