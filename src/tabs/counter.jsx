import React, { useState } from 'react';

export default function Counter() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    const handleAdd = () => setCount(prev => prev + 1);
    const handleMinus = () => setCount(prev => prev - 1);
    const handleReset = () => setCount(initialCount);
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handleAdd}>+ Add</button>
            <button onClick={handleMinus}>- Minus</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}
