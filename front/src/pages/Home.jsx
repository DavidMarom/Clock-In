import React, { useState } from 'react'
import { PopUpWelcome } from '../cmps/pop_up_welcome';

export function Home() {
    const [pop, setPop] = useState(true);


    return (
        <div className="relative">

            {(pop ? <PopUpWelcome toggle={()=>setPop(!pop)}/> : null)}
            <p>Clock-In is an open source employee-management system</p>


        </div>
    )
}