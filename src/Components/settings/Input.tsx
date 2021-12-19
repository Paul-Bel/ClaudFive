import React, {ChangeEvent, useState} from "react";

type InputType = {
    min: number,
    max: number,
    setValue: (value: number, name: string) => void
    namesValue: { nameMax: string, nameMin: string }
    setMinCount: (min: number) => void
    setMaxCount: (max: number) => void
    mincoutn: number
    maxcoutn: number
}
const stylesInput = {'width': '30px'}
const div = {'margin': 'auto'}

export const InputSet = ({namesValue, min, max, ...props}: InputType) => {
    let {nameMax, nameMin} = namesValue


    const setValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.id == nameMax) {

            props.setMaxCount(e.currentTarget.valueAsNumber)
        }
        if (e.currentTarget.id == nameMin) {
            props.setMinCount(Number(e.currentTarget.value))
        }

        props.setValue(JSON.parse(e.currentTarget.value), e.currentTarget.id)
    }


    return (
        <div style={div}>
        <span>{nameMax}
            <input
                style={stylesInput}
                min={props.mincoutn + 1}
                id={nameMax}
                value={props.maxcoutn}
                onChange={setValue}
                type="number"

            />
        </span>
            <p/>

            <span>{nameMin}
                <input
                    style={stylesInput}
                    id={nameMin}
                    value={props.mincoutn}
                    onChange={setValue}
                    type="number"
                    min={-1}
                    max={props.maxcoutn - 1}
                />
            </span>
            <div>

            </div>
            {props.mincoutn < 0 && <SpanError/>}

        </div>

    )
}

const SpanError = () => {
    const stylesSpan = {color: 'red', fontSize: '10px'}
    return (
        <div style={stylesSpan}>
            Enter correct number
        </div>
    )
}