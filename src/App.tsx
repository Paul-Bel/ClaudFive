import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterSet} from "./Components/VariantOne/CounterSet";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import {CustomCounter} from "./Components/VariantTwoo/CustomCounter";

function App() {
    let buttonName = {buttonOne: "INC", buttonTwo: "RESET", button: "SET"}
    let {buttonOne, buttonTwo} = buttonName
    let namesValue = {nameMax: "Max Value", nameMin: "Min Value"}
    const [displey, setDispleys] = useState(true)
    console.log(displey + ' znach')
    const [counterValue, setCounterValue] = useState({min: 0, max: 10, num: 0})
    useEffect(() => {
        let values = (localStorage.getItem('values'))
        if (values) {
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
        if (name == namesValue.nameMax) {
            setCounterValue({...copy, max: value})
        }
        if (name == namesValue.nameMin) {
            let copys = {...counterValue, min: value}
            setCounterValue({...copys})
        }
        if (name == buttonName.button) {
            let copys = {...counterValue, num: value}
            setCounterValue({...copys})
        }
    }

    const buttonSetInc = (but: string) => {
        let copy = {...counterValue}
        if (but === buttonOne && counterValue.num < counterValue.max) {
            setCounterValue({...copy, num: (counterValue.num + 1)})
        }
        if (but === buttonTwo) {
            setCounterValue({...copy, num: counterValue.min})
        }
    }
    return (
        <BrowserRouter>
            <div className={'App'}>
                <div className={"block"}>
                    <NavLink to={"/ClaudFive/"}>
                        <button className={'select'}>First_option</button>
                    </NavLink>
                    <NavLink to={"/SecondVar/"}>
                        <button className={'select'}>Second_option</button>
                    </NavLink>
                </div>
                <Routes>
                    <Route path='/ClaudFive'
                           element={<CounterSet
                               counterValue={counterValue}
                               buttonName={buttonName}
                               namesValue={namesValue}
                               setOfButton={setOfButton}
                               setCounterValue={setCounterValue}
                               setDispleys={setDispleys}
                               displey={displey}
                               buttonSetInc={buttonSetInc}
                           />}/>
                    <Route path='/SecondVar'
                           element={
                               <CustomCounter
                                   counterValue={counterValue}
                                   buttonName={buttonName}
                                   namesValue={namesValue}
                                   setOfButton={setOfButton}
                                   setCounterValue={setCounterValue}
                                   setDispleys={setDispleys}
                                   displey={displey}
                                   buttonSetInc={buttonSetInc}
                               />}/>
                </Routes>
            </div>

        </BrowserRouter>
    );
}

export default App;
