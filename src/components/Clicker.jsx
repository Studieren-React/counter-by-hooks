import './Clicker.css';
import { useState, useEffect } from "react";

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

    useEffect(() => {
        /** Обработка монтирования или обновления компонента */
        console.log('mount component Clicker', count);

        /** Обработка размонтирования компонента или обновления компонента */
        return () => console.log('unmount component Clicker');
    }, [count]);

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