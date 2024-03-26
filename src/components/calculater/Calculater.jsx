/* eslint-disable react/prop-types */
import React from 'react'

import './Calculator.css'


const AllButtons = ({ clickHandler }) => {
    const buttons = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", ".",]
    return (
        <div className='btn-container'>
            {buttons.map(button =>
                <button key={button} onClick={clickHandler} value={button} className='calc-btn'>{button}</button>)
            }
        </div>
    )
}

let vs = 5 * 5 - 2
console.log(vs)

const Display = ({ displayVal }) => {
    return (
        <>
            <input className='display' type="text" readOnly value={displayVal} />
        </>
    )
}

// eslint-disable-next-line react/prop-types

const Calculater = () => {
    const [calVal, setCalVal] = React.useState("")

    const clickHandler = (e) => {
        const val = e.target.value

        if (val === "C") {
            setCalVal("")
        } else if (val === "=") {
            setCalVal(eval(calVal))
        } else {
            setCalVal(calVal + e.target.value)
        }
    }
    return (
        <center className="main-container">
            <h4>Calculater</h4>
            <Display displayVal={calVal} />
            <AllButtons clickHandler={clickHandler} />
        </center>
    )
}

export default Calculater
