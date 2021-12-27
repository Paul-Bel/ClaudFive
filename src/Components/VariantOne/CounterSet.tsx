import React from "react";
import {SetCloud} from "../settings/SetCloud";
import './../../App.css';
import {ClaudCounter} from "../inc/ClaudCounter";
import {NavLink} from "react-router-dom";

type CV = {
    min: number, max: number, num: number
}
type CoutnerSetType = {
    counterValue: { min: number, max: number, num: number }
    buttonName: { buttonOne: string, buttonTwo: string, button: string}
    namesValue: { nameMax: string, nameMin: string }
    changeInc: (value: number, name: string) => void
    setOfButton: (value: number, name: string) => void
    setDispleys: (display: boolean) => void
    setCounterValue: (value: CV) => void
    displey: boolean
    buttonControl: (e: string) => void,
    id?: string
}

export const CounterSet = (props: CoutnerSetType) => {
    return (
        <div className={'conteiner'}>
            <div>
                <SetCloud
                    counterValue={props.counterValue}
                    buttonName={props.buttonName}
                    namesValue={props.namesValue}
                    changeInc={props.changeInc}
                    setOfButton={props.setOfButton}
                    setCounterValue={props.setCounterValue}
                    setDispleys={props.setDispleys}
                    displey={props.displey}

                />
            </div>
            <div>
                <ClaudCounter
                    counterValue={props.counterValue}
                    buttonControl={props.buttonControl}
                    buttonName={props.buttonName}
                    displey={props.displey}
                />

            </div>
        </div>

    )
}