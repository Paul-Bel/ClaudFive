import React, {ChangeEvent, useState} from "react";
import s from './../inc/Сounter.module.css'
import {Button} from "../inc/Button";

type InputNumberType = {
    min: number,
    max: number,
    buttonName: { buttonOne: string, buttonTwo: string, button: string }
    namesValue: { nameMax: string, nameMin: string }
    changeMin: (value: number) => void
    changeMax: (value: number) => void
}

export const InputNumber = ({min, max, ...props}: InputNumberType) => {

    const styleName = {
        fontSize: '20ps',
        padding: '10px',
        borderWidth: '2px',
        borderRadius: '15px',
        borderStyle: 'groove',
        width: '500px',
        height: '240 px',
        marginTop: '60px',
        marginBottom: "60px",
        // textAlign: 'center',
        borderColor: 'wheat',
    }

    const [mincoutn, setMinCount] = useState<number>(min)
    const mixValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMin(JSON.parse(e.currentTarget.value))
    }
    const [maxcoutn, setMaxCount] = useState<number>(max)
    const maxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxCount(JSON.parse(e.currentTarget.value))
        props.changeMax(JSON.parse(e.currentTarget.value))
    }

    return (
        <div className={s.counterFather}>

            <span style={styleName}>{props.namesValue.nameMax}
            <input value={maxcoutn} onChange={maxValue} type="number"  min={mincoutn} max={maxcoutn}/></span>
            <p/>

            <span style={styleName}>{props.namesValue.nameMin}
            <input onChange={mixValue} type="number" min={mincoutn} max={maxcoutn}/></span>



            <div className={s.buttuns}>
                <Button
                    name={'SET'}
                    min={min}
                    max={max}
                    buttonName={props.buttonName}/>
            </div>

        </div>
    )
}




