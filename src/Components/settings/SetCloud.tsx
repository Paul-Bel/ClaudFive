import React, {ChangeEvent} from "react";
import s from './SetCloud.module.css'
import {Button} from "../inc/Button";

type CV = {
    min: number, max: number, num: number
}
type InputNumberType = {
    counterValue: { min: number, max: number, num: number }
    buttonName: { buttonOne: string, buttonTwo: string, button: string }
    namesValue: { nameMax: string, nameMin: string }
    changeInc: (value: number, name: string) => void
    setOfButton: (value: number, name: string) => void
    setDispleys: (display: boolean) => void
    setCounterValue: (value: CV) => void
    displey: boolean
    id?: boolean
    changeSettings?: () => void
}
const stylesInput = {
    'width': '80px',
    borderRadius: '5px'
}
const redStyle = {
    background: 'red',
    'width': '80px',
    borderRadius: '5px',
}

export const SetCloud = ({counterValue, ...props}: InputNumberType) => {
    let {min, max} = counterValue
    const changeInc = () => {
        props.setDispleys(false)
    }
    const setButton = () => {
        props.setDispleys(true)
        props.setOfButton(min, props.buttonName.button)
        if (props.changeSettings) {
            props.changeSettings()
        }
    }
    let {nameMax, nameMin} = props.namesValue
    const setValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.id == nameMax) {
            props.setOfButton(e.currentTarget.valueAsNumber, nameMax)
        }
        if (e.currentTarget.id == nameMin) {
            props.setOfButton(Number(e.currentTarget.value), nameMin)
        }
    }
    return (
        <div className={s.item}>
            <div className={s.displey}>
                <div className={s.setCoumter}>
                    <div>
                        {nameMax}
                    </div>
                    <div>
                        <input
                            className={s.input}
                            style={min === max ? redStyle : stylesInput}
                            min={min}
                            id={nameMax}
                            value={max}
                            onChange={setValue}
                            type="number"
                            onClick={changeInc}
                        />
                    </div>
                </div>
                <div className={s.setCoumter}>
                    <div>
                        {nameMin}
                    </div>
                    <div>
                        <input
                            className={s.input}
                            style={min === max ? redStyle : min === -1 ? redStyle : stylesInput}
                            id={nameMin}
                            value={min}
                            onChange={setValue}
                            type="number"
                            min={-1}
                            max={max}
                            onClick={changeInc}
                        />
                    </div>
                </div>
            </div>
            <div className={s.button}>
                <Button
                    min={min}
                    max={max}
                    buttonName={props.buttonName}
                    setButton={setButton}
                    name={props.buttonName.button}
                    changeSettings={props.changeSettings}
                />
            </div>
        </div>
    )
}




