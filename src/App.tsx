import React, {useState} from 'react';
import {ClaudCounter} from "./Components/inc/ClaudCounter";
import './App.css';
import {SetCloud} from "./Components/settings/SetCloud";

function App() {
    let buttonName = {buttonOne: "INC", buttonTwo: "RESET", button: "SET"}
    let {buttonOne, buttonTwo} = buttonName
    let namesValue = {nameMax: "Max Value", nameMin: "Min Value"}

    let [min, setMin] = useState<number>(0)
    let [max, setMax] = useState<number>(10)
    let [num, setNum] = useState<number>(min)
    const [displey, setDispley] = useState(true)

    const changeInc = (value: number, name: string) => {
        if(name === namesValue.nameMax) {setMax(value)}
        if(name === namesValue.nameMin) {setMin(value)}
    }

    const buttonInc = (but: string) => {
        if (but === buttonOne && num < max) {
            setNum(num + 1)
        }
        if (but === buttonTwo) {
            setNum(min)
        }
    }

    return (
        <div className={'App'}>
            <div className={'conteiner'}>
            <div >
                <SetCloud
                    min={min}
                    max={max}
                    buttonName={buttonName}
                    namesValue={namesValue}
                    changeInc={changeInc}
                    setMin={setMin}
                    setMax={setMax}
                    setDispley={setDispley}
                    setNum={setNum}
                />
            </div>
            <div>
                <ClaudCounter
                    num={num}
                    buttonControl={buttonInc}
                    min={min}
                    max={max}
                    buttonName={buttonName}
                    displey={displey}
                />

            </div>
            </div>
        </div>
    );
}

export default App;
