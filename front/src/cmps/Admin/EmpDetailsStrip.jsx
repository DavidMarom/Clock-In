import React from 'react'

export function EmpDetailsStrip(props) {
    const aaa = props.user;
    if (!aaa) { return <h1>loading</h1> }

    return (
        <div className="rb w500 emp-strip">
            <div className="cell-l"><p>{aaa.name}</p></div>
            <p>{aaa.role}</p>
            <p>{aaa.email}</p>
        </div>
    )
}
