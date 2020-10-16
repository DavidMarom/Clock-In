import React from 'react'

export function EmpDetailsStrip(props) {
    const aaa = props.user;
    if (!aaa) { return <h1>loading</h1> }

    return (
        <div>
            <p>{aaa.name}</p>
            <p>{aaa.role}</p>
        </div>
    )
}
