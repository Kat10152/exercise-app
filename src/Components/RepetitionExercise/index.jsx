import React, { useState } from 'react';

function RepitionExercise({ name }) {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div>
            <p>Repitions: {count}</p>
            <button onClick={increment}> Complete Rep</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default RepitionExercise;