import React, {ChangeEvent, useState} from "react";
import s from './SetCloud.module.css'
import {Button} from "../inc/Button";
import {InputSet} from "./Input";

type InputNumberType = {
    min: number,
    max: number,
    buttonName: { buttonOne: string, buttonTwo: string, button: string }
    namesValue: { nameMax: string, nameMin: string }
    changeInc: (value: number, name: string) => void

}

export const SetCloud = ({min, max, ...props}: InputNumberType) => {

    const [setting, setSettings] = useState({value: 0, names: ''},)
    const [maxcoutn, setMaxCount] = useState<number>(max)
    const [mincoutn, setMinCount] = useState<number>(min)


    const setButton = () => {
        props.changeInc(setting.value, setting.names)
    }

    const setValue = (value: number, names: string) => {
        setSettings({value, names})
    }

    return (
        <div className={s.item}>
            <div className={s.displey}>
            <InputSet
                setValue={setValue}
                min={min} max={max}
                namesValue={props.namesValue}
                setMaxCount={setMaxCount}
                setMinCount={setMinCount}
                maxcoutn={maxcoutn}
                mincoutn={mincoutn}
            />
            </div>


            <div  className={s.button}>
                <Button
                    name={'SET'}
                    min={min}
                    max={max}
                    buttonName={props.buttonName}
                    setButton={setButton}
                    mincoutn={mincoutn}
                />
            </div>


        </div>
    )
}




