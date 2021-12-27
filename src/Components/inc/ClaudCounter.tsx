import s from './ClaudCounter.module.css'
import {Button} from "./Button";
import {Counter} from "./Сounter";
import React from "react";

type buttonProps = {
    counterValue: { min: number, max: number, num: number }
    buttonControl: (e: string) => void,
    buttonName: { buttonOne: string, buttonTwo: string, button: string}
    displey: boolean
    id?: boolean
    changeSettings?: () => void
}

export function ClaudCounter({buttonName, counterValue, ...props}: buttonProps) {
// let {min, max, num} = counterValue

    return (

        <div className={s.item}>

            <div className={s.displey}>
                <Counter min={counterValue.min} max={counterValue.max} num={counterValue.num} displey={props.displey}/>
            </div>

            <div className={s.button}>
                <Button
                    num={counterValue.num}
                    buttonControl={() => props.buttonControl(buttonName.buttonOne)}
                    min={counterValue.min}
                    max={counterValue.max}
                    buttonName={buttonName}
                    display={props.displey}
                    name={buttonName.buttonOne}
                />
                <Button
                    num={counterValue.num}
                    buttonControl={() => props.buttonControl(buttonName.buttonTwo)}
                    min={counterValue.min}
                    max={counterValue.max}
                    buttonName={buttonName}
                    display={props.displey}
                    name={buttonName.buttonTwo}

                />
                {props.id &&
                <Button
                    buttonName={buttonName}
                    changeSettings={props.changeSettings}
                    name={buttonName.button}
                    num={counterValue.num}
                    id={props.id}
                    min={counterValue.min}
                    max={counterValue.max}

                />}
                {/*<NavLink to={"/FirsVar/"}><button className={a.buttonSet}> Первый счетчик</button></NavLink>*/}


            </div>
        </div>
    );
}


