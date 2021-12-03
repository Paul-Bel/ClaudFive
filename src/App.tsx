import React, {useState} from 'react';
import {Counter} from "./Components/Claud";
import './App.css';

function App() {
        let [num, setNum] = useState<number>(0)
        const buttonControl = (but: string) => {
            if (but === 'INC' && num < 5) {setNum(num + 1)}
            if (but === 'RESET') {setNum(0)}
        }
        return (
        <div className="App">
            <Counter num={num} buttonControl={buttonControl}/>
        </div>
    );
}

export default App;
