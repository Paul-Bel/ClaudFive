import React, {useState} from 'react';
import {Claud} from "./Components/Claud";
import './App.css';

function App() {
    let buttonName = {buttonOne: "INC", buttonTwo: "RESET"}
    let {buttonOne, buttonTwo} = buttonName
    let limitation = {min: 0, max: 10}
    let {min, max} = limitation
    let [num, setNum] = useState<number>(min)
    const buttonControl = (but: string) => {
        if (but === buttonOne && num < max) {
            setNum(num + 1)
        }
        if (but === buttonTwo) {
            setNum(min)
        }
    }

    return (
        <div className="App">
            <Claud num={num} buttonControl={buttonControl} limitation={limitation} buttonName={buttonName}/>
        </div>
    );
}

export default App;
