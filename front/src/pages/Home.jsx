import React, { useState } from 'react'
import { PopUpWelcome } from '../cmps/pop_up_welcome';

export function Home() {
    const [pop, setPop] = useState(true);


    return (
        <div className="relative">
            <h1>Home</h1>

            {(pop ? <PopUpWelcome toggle={()=>setPop(!pop)}/> : null)}
            <p>Hi-Joe is an open source employee-management system</p>


        </div>
    )
}