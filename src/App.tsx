import React, {useEffect, useState} from 'react';
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

    useEffect(()=> {
        setMax(Number(localStorage.getItem('maxValue')))
    },[])
    useEffect(()=> {
        setMin(Number(localStorage.getItem('minValue')))
    },[])
    useEffect(()=> {
        setNum(Number(localStorage.getItem('numValue')))
    },[])

    useEffect( () => {
        localStorage.setItem('maxValue', max.toString())
    }, [max])
    useEffect( () => {
        localStorage.setItem('minValue', min.toString())
    }, [min])
    useEffect( () => {
        localStorage.setItem('numValue', num.toString())
    }, [num])




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
