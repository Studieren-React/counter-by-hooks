import './Clicker.css';
import { useState } from "react";

export function Clicker() {
    const [count, handleCount] = useState(0);

    const incrementCounter = () => {
        handleCount(count + 1);
    }

    const decrementCounter = () => {
        if (count <= 0) {
            return;
        }

        handleCount(count - 1);
    }

    return (
        <>
            <div className="counter-wrapper">
                <button onClick={incrementCounter}>+</button>
                <div className="counter">{count}</div>
                <button
                    disabled={count <= 0}
                    onClick={decrementCounter}
                >-</button>
            </div>
        </>
    )
}