import React, {ChangeEvent, useState} from "react";

type InputType = {
    min: number,
    max: number,
    setValue: (value: number, name: string) => void
    namesValue: { nameMax: string, nameMin: string }

}

export const InputSet = ({namesValue, min, max, ...props}: InputType) => {
    let {nameMax, nameMin} = namesValue

    const [maxcoutn, setMaxCount] = useState<number>(max)
    const [mincoutn, setMinCount] = useState<number>(min)

    const setValue = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.name)
        if(e.currentTarget.id == nameMax) {setMaxCount(e.currentTarget.valueAsNumber)}
        if(e.currentTarget.id == nameMin) {setMinCount(JSON.parse(e.currentTarget.value))}


        // if (props.changeInc)
            props.setValue(JSON.parse(e.currentTarget.value), e.currentTarget.id)
    }


    return (
        <div>
        <span>{nameMax}
            <input id={nameMax} value={maxcoutn} onChange={setValue} type="number"/></span>
            <p/>

            <span>{nameMin}
                <input id={nameMin} value={mincoutn} onChange={setValue} type="number"/></span>
        </div>
    )
}