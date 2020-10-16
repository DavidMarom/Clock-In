import CounterA from '../cmps/Counter-a'
import ControlsA from '../cmps/Controls-a'
import CounterB from '../cmps/Counter-b'
import ControlsB from '../cmps/Controls-b'


import React from 'react'
const { getTask } = require('../services/taskDB')

export function page01() {
    const myTask = getTask(1);
    return (
        <div>
            <p>page 01</p>
            {myTask.title}


            <CounterA />
            <ControlsA />
            <CounterB />
            <ControlsB />

        </div>
    )
}
