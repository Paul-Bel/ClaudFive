import React, {useState} from 'react';
import s from './Сounter.module.css'

type butType = {
    but: 'i' | 'r'
}

export function Counter() {
    let [num, setNum] = useState(0)

    const buttonControl = (but: string) => {
        if (but === 'i' && num < 5) {
            setNum(num + 1)
        }
        if (but === 'r') {
            setNum(0)
        }
    }

    return (
        <div className={s.counterFather}>
            <div className={num === 5 ? s.redFive : s.counter}>{num}</div>


            <div className={s.buttuns}> <span className={s.span && s.spanO}>

                <button
                    disabled={num === 5}
                    className={s.button}
                    onClick={() => buttonControl('i')}>INC</button>

        </span>

                <span className={s.span && s.spanT}>

                    <button
                        disabled={num === 0}
                        className={s.button}
                        onClick={() => buttonControl('r')}>RESET</button>

                </span>
            </div>
        </div>
    );
}


