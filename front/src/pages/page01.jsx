import React from 'react'
const { getTask } = require('../services/taskDB')

export function page01() {
    const myTask = getTask(1);
    return (
        <div>
            <p>page 01</p>
            {myTask.title}


        </div>
    )
}
