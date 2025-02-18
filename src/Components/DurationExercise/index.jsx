import React, { useState, useEffect } from 'react';

function DurationExercise({ name }) {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isRunning]);

    const start = () => {
        setIsRunning(true);
    };

    const reset = () => {
        setIsRunning(false);
        setTime(0);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60).toString().padStart(2, "0");
        const seconds = (time % 60).toString().padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    return (
        <div>
            <p>Timer: {formatTime(time)}</p>
            <button onClick={start} disabled={isRunning}>
                Start
            </button>
            <button onClick={reset} disabled={!isRunning}>
                Reset
            </button>

        </div>
    );
}

export default DurationExercise;