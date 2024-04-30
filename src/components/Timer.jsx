import { useEffect, useRef, useState } from 'react';
import './Timer.css';

import { getCount, saveCount } from '../helpers/localStorage.helper';

export function Timer() {
    const [count, handleCount] = useState(getCount());
    const [isCalculating, handleIsCalculating] = useState(false);
    const timerIdRef = useRef(null);

    const start = () => {
        handleIsCalculating(!isCalculating);
    };

    const reset = () => {
        stopCounter(timerIdRef.current);
        handleCount(0);
        handleIsCalculating(false);
    };

    const stopCounter = (interval) => {
        clearInterval(interval);
        timerIdRef.current = null;
    }

    useEffect(() => {
        saveCount(count);
    }, [count]);

    useEffect(() => {
        if (isCalculating) {
            timerIdRef.current = setInterval(() => {
                handleCount((prevCount) => prevCount + 1);
            }, 1000);
        } else {
            stopCounter(timerIdRef.current);
        }

        return () => {
            timerIdRef.current && stopCounter(timerIdRef.current);
        };
    }, [isCalculating]);

    return (
        <div className="CounterApp">
            <h2 className="CounterTitle">react timer</h2>
            <div className="Counter">Current state: {count}</div>
            <div className="CounterWrapper">
                <button
                    className="CounterButton"
                    onClick={start}
                >
                    {isCalculating ? 'stop' : 'start'}
                </button>
                <button
                    className="CounterButton"
                    onClick={reset}
                >
                    reset
                </button>
            </div>
        </div>
    )
}