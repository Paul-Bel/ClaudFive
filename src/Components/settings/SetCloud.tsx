import React, {ChangeEvent, useState} from "react";
import s from './SetCloud.module.css'
import {Button} from "../inc/Button";

type InputNumberType = {
    min: number,
    max: number,
    buttonName: { buttonOne: string, buttonTwo: string, button: string }
    namesValue: { nameMax: string, nameMin: string }
    changeInc: (value: number, name: string) => void
    setMax: (max: number) => void
    setMin: (min: number) => void
    setDispley: (display: boolean) => void
    setNum: (min: number) => void
}
const stylesInput = {
    'width': '50px',
    borderRadius: '5px'
}

export const SetCloud = ({min, max, setMax, setMin, ...props}: InputNumberType) => {

    const changeInc = () => {
        props.setDispley(false)
    }

    let {nameMax, nameMin} = props.namesValue

    const setValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.id == nameMax) {
            setMax(e.currentTarget.valueAsNumber)
        }
        if (e.currentTarget.id == nameMin) {
            setMin(Number(e.currentTarget.value))
            props.setNum(Number(e.currentTarget.value))
        }
    }

    const setButton = () => {
        props.setDispley(true)

    }

    return (
        <div className={s.item}>
            <div className={s.displey}>
<div className={s.setCoumter}>
                <div >
                    {nameMax}
                </div>
                <div>
                    <input
                        className={s.input}
                        style={stylesInput}
                        min={min + 1}
                        id={nameMax}
                        value={max}
                        onChange={setValue}
                        type="number"
                        onClick={changeInc}
                    />
                </div>
</div>
                <div className={s.setCoumter}>
                <div >
                    {nameMin}
                </div>
                <div>
                    <input

                        className={s.input}
                        style={stylesInput}
                        id={nameMin}
                        value={min}
                        onChange={setValue}
                        type="number"
                        min={-1}
                        max={max - 1}
                        onClick={changeInc}
                    />
                </div>
                </div>

            </div>

            <div className={s.button}>
                <Button
                    name={'SET'}
                    min={min}
                    max={max}
                    buttonName={props.buttonName}
                    setButton={setButton}

                />
            </div>


        </div>
    )
}




