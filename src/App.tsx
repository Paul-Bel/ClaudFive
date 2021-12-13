import React, {useState} from 'react';
import {ClaudCounter} from "./Components/inc/ClaudCounter";
import './App.css';
import {InputNumber} from "./Components/settings/inputNumber";

function App() {
    let buttonName = {buttonOne: "INC", buttonTwo: "RESET", button: "SET"}
    let {buttonOne, buttonTwo} = buttonName

    let min = 0
    let max = 10
    let [num, setNum] = useState<number>(min)

    const changeMin = (value: number) => {
        min = value
    }

    const changeMax = (value: number) => {
        if(value > max){return max++}

        console.log(max)
        console.log(value)
    }
    console.log(max)
    let namesValue = {nameMax: "Max Value", nameMin: "Min Value"}



    const buttonControl = (but: string) => {
        if (but === buttonOne && num < max) {
            setNum(num + 1)
        }
        if (but === buttonTwo) {
            setNum(min)
        }
    }

    return (
        <div className="tems">
            <div className="App">
                <InputNumber
                    min={min}
                    max={max}
                    buttonName={buttonName}
                    namesValue={namesValue}
                    changeMin={changeMin}
                    changeMax={changeMax}
                />
            </div>
            <div className="App">
                <ClaudCounter
                    num={num}
                    buttonControl={buttonControl}
                    min={min}
                    max={max}
                    buttonName={buttonName}/>

            </div>
        </div>
    );
}

export default App;
