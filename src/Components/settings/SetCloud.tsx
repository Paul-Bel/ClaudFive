import React, {ChangeEvent, MouseEvent} from "react";
import s from './SetCloud.module.css'
import {Button} from "../button/Button";

type CV = {
    min: number, max: number, num: number
}
type InputNumberType = {
    counterValue: { min: number, max: number, num: number }
    buttonName: { buttonOne: string, buttonTwo: string, button: string }
    namesValue: { nameMax: string, nameMin: string }
    setOfButton: (value: number, name: string) => void
    setDispleys: (display: boolean) => void
    setCounterValue: (value: CV) => void
    displey: boolean
    settings?: boolean
    changeSettings?: (set: boolean) => void
}
export const SetCloud = ({counterValue, ...props}: InputNumberType) => {
    let {min, max} = counterValue
    const changeInc = (e: MouseEvent<HTMLInputElement>) => {
        props.setDispleys(false)
        e.preventDefault()
    }
    const setButton = () => {
        props.setDispleys(true)
        props.setOfButton(min, props.buttonName.button)
        if (props.changeSettings) {
            props.changeSettings(!props.settings)
        }
    }
    let {nameMax, nameMin} = props.namesValue

    const valueOnCklickButton = (e: MouseEvent<HTMLButtonElement>) => {
        if (e.currentTarget.id == nameMax) {
            props.setOfButton(max + 1, nameMax)
        }
        if (e.currentTarget.id == '-') {
            props.setOfButton(max - 1, nameMax)
        }

        if (e.currentTarget.id == nameMin) {
            props.setOfButton(min + 1, nameMin)
        }
        if (e.currentTarget.id == '--') {
            props.setOfButton(min - 1, nameMin)
        }
        props.setDispleys(false)
    }
    const doubleValueOnCklickButton = (e: MouseEvent<HTMLButtonElement>) => {
        if (e.currentTarget.id == nameMax) {
            props.setOfButton(max + 10, nameMax)
        }
        if (e.currentTarget.id == '-' && max >= min + 10) {
            props.setOfButton(max - 10, nameMax)
        }

        if (e.currentTarget.id == nameMin && min + 10 <= max) {
            props.setOfButton(min + 10, nameMin)
        }
        if (e.currentTarget.id == '--' && min - 10 >= -1) {
            props.setOfButton(min - 10, nameMin)
        }
        props.setDispleys(false)
    }


    const disabled = min === max || (min === -1)


    return (
        <div className={s.item}>
            <div className={s.displey}>
                <div className={s.setCoumter}>
                    <div className={s.div}>
                        {nameMax}
                    </div>
                    <div>
                        <button
                            className={s.button_Value}
                            id={nameMax}
                            onClick={valueOnCklickButton}
                            onDoubleClick={doubleValueOnCklickButton}
                        >
                            +
                        </button>
                        <input
                            className={min === max ? s.redStyle : s.stylesInput}
                            min={min}
                            id={nameMax}
                            value={max}
                            onKeyPress={(e) => {
                                e.preventDefault()
                            }}
                            type="number"
                            onClick={changeInc}
                            step="1"
                            disabled={true}
                        />
                        <button
                            className={min === max ? s.button_Value_disabled : s.button_Value}
                            id={'-'}
                            onClick={valueOnCklickButton}
                            onDoubleClick={doubleValueOnCklickButton}
                            disabled={max === min}
                        >
                            -
                        </button>
                    </div>
                </div>
                <div className={s.setCoumter}>
                    <div className={s.div}>
                        {nameMin}
                    </div>
                    <div>
                        <button
                            className={min === max ? s.button_Value_disabled : s.button_Value}
                            id={nameMin}
                            onClick={valueOnCklickButton}
                            onDoubleClick={doubleValueOnCklickButton}
                            disabled={max === min}
                        >
                            +
                        </button>
                        <input
                            className={min === max ? s.redStyle : min === -1 ? s.redStyle : s.stylesInput}
                            id={nameMin}
                            value={min}
                            onKeyPress={(e) => {
                                e.preventDefault()
                            }}
                            type="number"
                            min={-1}
                            max={max}
                            onClick={changeInc}
                            disabled={true}
                        />
                        <button
                            className={min === -1 ? s.button_Value_disabled : s.button_Value}
                            id={'--'}
                            onClick={valueOnCklickButton}
                            onDoubleClick={doubleValueOnCklickButton}
                            disabled={min === -1}
                        >
                            -
                        </button>
                    </div>
                </div>
            </div>
            <div className={!props.displey ? s.buttonSet : s.button}>
                <Button
                    disabled={disabled}
                    setButton={setButton}
                    name={props.buttonName.button}

                />
            </div>
        </div>
    )
}




