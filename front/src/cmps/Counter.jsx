import React, { useState } from 'react'


export function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Clicks: {count}</p>
            <button onClick={() => setCount(count+1)}>
                Add
            </button>
        </div>
    )
}
