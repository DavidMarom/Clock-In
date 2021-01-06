import React from 'react'

export function EmpDetailsStrip(props) {
    const aaa = props.user;
    if (!aaa) { return <h1>loading</h1> }
    let tmp = 'https://robohash.org/honey?set=set' + ((Math.floor(Math.random() * Math.floor(8))) + 1);
    return (
        <div className="table">
            <div className="tc">
                <div className="center-cropped">{(aaa.img ? <img src={aaa.img[0]} alt="" ></img> : <img src={tmp} ></img>)}</div>
            </div>
            <p className="tc">{aaa.name}</p>
            <p className="tc">{aaa.role}</p>
            <p className="tc">{aaa.email}</p>
        </div>
    )
}
