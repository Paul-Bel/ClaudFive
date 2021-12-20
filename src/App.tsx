import React, {useEffect, useState} from 'react';
import {ClaudCounter} from "./Components/inc/ClaudCounter";
import './App.css';
import {SetCloud} from "./Components/settings/SetCloud";

// export type CounterType = {
// min: number
//     max: number
//      num: number
// }

function App() {
    let buttonName = {buttonOne: "INC", buttonTwo: "RESET", button: "SET"}
    let {buttonOne, buttonTwo} = buttonName
    let namesValue = {nameMax: "Max Value", nameMin: "Min Value"}

    const [displey, setDispleys] = useState(true)
    console.log(displey + ' znach')
    const [counterValue, setCounterValue] = useState(
        {min: 0, max: 10, num: 0}
    )

    useEffect(()=> {
        let values = (localStorage.getItem('values'))
        if(values){
            let num = JSON.parse(values)
            num.num = JSON.parse(values).min
            setCounterValue(num)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('values', JSON.stringify(counterValue))
    }, [counterValue])


    const setOfButton = (value: number, name: string) => {
        let copy = {...counterValue}
        if(name == namesValue.nameMax){
            setCounterValue({...copy, max: value})
        }
        if(name == namesValue.nameMin){
            let copys = {...counterValue, min: value}
            setCounterValue({...copys})
        }
        if(name == buttonName.button){
            let copys = {...counterValue, num: value}
            setCounterValue({...copys})
        }
   }

    const changeInc = (value: number, name: string) => {
        let copy = {...counterValue}
        if (name === namesValue.nameMax) {
            setCounterValue({...copy, max: value})
        }
        if (name === namesValue.nameMin) {
            setCounterValue({...copy, min: value})
        }
    }

    const buttonInc = (but: string) => {
        let copy = {...counterValue}
        if (but === buttonOne && counterValue.num < counterValue.max) {
            setCounterValue({...copy, num: (counterValue.num + 1)})
        }
        if (but === buttonTwo) {
            setCounterValue({...copy, num: counterValue.min})
        }
    }

    return (
        <div className={'App'}>
            <div className={'conteiner'}>
                <div>
                    <SetCloud
                        counterValue={counterValue}
                        buttonName={buttonName}
                        namesValue={namesValue}
                        changeInc={changeInc}
                        setOfButton={setOfButton}
                        setCounterValue={setCounterValue}
                        setDispleys={setDispleys}
                        displey={displey}

                    />
                </div>
                <div>
                    <ClaudCounter
                        counterValue={counterValue}
                        buttonControl={buttonInc}
                        buttonName={buttonName}
                        displey={displey}
                    />

                </div>
            </div>
        </div>
    );
}

export default App;
