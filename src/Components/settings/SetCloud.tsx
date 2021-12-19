import React, {ChangeEvent, useState} from "react";
import s from './SetCloud.module.css'
import {Button} from "../inc/Button";

type InputNumberType = {
    min: number,
    max: number,
    buttonName: { buttonOne: string, buttonTwo: string, button: string }
    namesValue: { nameMax: string, nameMin: string }
    changeInc: (value: number, name: string) => void

}
const stylesInput = {'width': '30px'}


export const SetCloud = ({min, max, ...props}: InputNumberType) => {

    const [setting, setSettings] = useState({value: 0, names: ''},)
    const [maxcoutn, setMaxCount] = useState<number>(max)
    const [mincoutn, setMinCount] = useState<number>(min)
    let {nameMax, nameMin} = props.namesValue


    const setValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.id == nameMax) {

            setMaxCount(e.currentTarget.valueAsNumber)
        }
        if (e.currentTarget.id == nameMin) {
            setMinCount(Number(e.currentTarget.value))
        }

        setValue(JSON.parse(e.currentTarget.value))
    }


    const setButton = () => {
        props.changeInc(setting.value, setting.names)
    }



    return (
        <div className={s.item}>
            <div className={s.displey}>
<span>   {nameMax}
                <input
                    style={stylesInput}
                    min={mincoutn + 1}
                    id={nameMax}
                    value={maxcoutn}
                    onChange={setValue}
                    type="number"

                />
            </span>
            <p/>

            <span>{nameMin}
                <input
                    style={stylesInput}
                    id={nameMin}
                    value={mincoutn}
                    onChange={setValue}
                    type="number"
                    min={-1}
                    max={maxcoutn - 1}
                />
            </span>

            </div>


            {/*<InputSet*/}
            {/*    setValue={setValue}*/}
            {/*    min={min} max={max}*/}
            {/*    namesValue={props.namesValue}*/}
            {/*    setMaxCount={setMaxCount}*/}
            {/*    setMinCount={setMinCount}*/}
            {/*    maxcoutn={maxcoutn}*/}
            {/*    mincoutn={mincoutn}*/}
            {/*/>*/}



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




