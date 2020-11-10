import React from 'react'

export function EmpDetailsStrip(props) {
    const aaa = props.user;
    if (!aaa) { return <h1>loading</h1> }

    return (
        // <div className="rb w500 emp-strip">
        <div className="table">
            <p className="tc">{aaa.name}</p>
            <p className="tc">{aaa.role}</p>
            <p className="tc">{aaa.email}</p>
        </div>
    )
}
