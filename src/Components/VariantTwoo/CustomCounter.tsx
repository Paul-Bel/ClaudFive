import React, {useState} from "react";
import './../../App.css';
import {SetCloud} from "../settings/SetCloud";
import {ClaudCounter} from "../inc/ClaudCounter";

type CV = {
    min: number, max: number, num: number
}
type CoutnerSetType = {
    counterValue: { min: number, max: number, num: number }
    buttonName: { buttonOne: string, buttonTwo: string, button: string }
    namesValue: { nameMax: string, nameMin: string }
    setOfButton: (value: number, name: string) => void
    setDispleys: (display: boolean) => void
    setCounterValue: (value: CV) => void
    displey: boolean
    buttonSetInc: (e: string) => void,
}
export const CustomCounter = (props: CoutnerSetType) => {
    const [settings, setSettings] = useState(true)


    const changeSettings = (set: boolean) => {
        setSettings(set)
    }
    return (
        <div className={'conteiner'}>

            {!settings ?
                <SetCloud
                    counterValue={props.counterValue}
                    buttonName={props.buttonName}
                    namesValue={props.namesValue}
                    setOfButton={props.setOfButton}
                    setCounterValue={props.setCounterValue}
                    setDispleys={props.setDispleys}
                    displey={props.displey}
                    settings={settings}
                    changeSettings={changeSettings}
                />
                :
                <ClaudCounter
                    settings={settings}
                    counterValue={props.counterValue}
                    buttonSetInc={props.buttonSetInc}
                    buttonName={props.buttonName}
                    displey={props.displey}
                    changeSettings={changeSettings}
                    setDispleys={props.setDispleys}
                />}
        </div>
    )
}