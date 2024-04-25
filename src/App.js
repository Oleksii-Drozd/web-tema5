import React, { useState } from "react";
import "./App.css";

export default function Counter() {
    const [count, setCount] = useState(0);

    function add() {
        setCount(prevCount => prevCount + 1);
    }

    function subtract() {
        setCount(prevCount => prevCount - 1);
    }

    return (
        <div className="counter">
            {/* кнопка для віднімання */}
            <button className="counter--button counter--minus" onClick={subtract}>–</button>

            {/* центральний круг з лічильником */}
            <div className="counter--count">
                <h1>{count}</h1>
            </div>

            {/* кнопка для додавання */}
            <button className="counter--button counter--plus" onClick={add}>+</button>
        </div>
    );
}
