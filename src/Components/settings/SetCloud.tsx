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
    'width': '80px',
    borderRadius: '5px'
}
const redStyle = {
    background: 'red',
    'width': '50px',
    borderRadius: '5px',
}

export const SetCloud = ({min, max, setMax, setMin, ...props}: InputNumberType) => {

    const changeInc = () => {
        props.setDispley(false)
    }
    const setButton = () => {
        props.setDispley(true)

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
                        style={min===max ? redStyle : stylesInput}
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
                <div >
                    {nameMin}
                </div>
                <div>
                    <input

                        className={s.input}
                        style={min===max ? redStyle : stylesInput}
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




