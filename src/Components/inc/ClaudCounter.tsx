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

    const disebled = (buttonName.buttonTwo && !props.displey)
        || (buttonName.button && props.displey)
        || (buttonName.buttonOne && counterValue.num === counterValue.max)
        || (buttonName.buttonTwo && counterValue.num === counterValue.min)
        || (counterValue.min === -1)
        || (counterValue.min === counterValue.max)


    return (
        <div className={s.item}>
            <div className={s.displey}>
                <Counter min={counterValue.min} max={counterValue.max} num={counterValue.num} displey={props.displey}/>
            </div>
            <div className={s.button}>
                <Button
                    num={counterValue.num}
                    buttonSetInc={() => props.buttonSetInc(buttonName.buttonOne)}
                    min={counterValue.min}
                    max={counterValue.max}
                    buttonName={buttonName}
                    display={props.displey}
                    name={buttonName.buttonOne}
                />
                <Button
                    num={counterValue.num}
                    buttonSetInc={() => props.buttonSetInc(buttonName.buttonTwo)}
                    min={counterValue.min}
                    max={counterValue.max}
                    buttonName={buttonName}
                    display={props.displey}
                    name={buttonName.buttonTwo}
                />
                {props.settings &&
                <Button
                    buttonName={buttonName}
                    changeSettings={props.changeSettings}
                    name={buttonName.button}
                    num={counterValue.num}
                    settings={props.settings}
                    min={counterValue.min}
                    max={counterValue.max}
                />}
            </div>
        </div>
    );
}


