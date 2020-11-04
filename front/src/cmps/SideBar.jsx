import React from 'react'
import { NavLink } from "react-router-dom";
import history from '../history';

export const SideBar = () => {

    const clickHandler = (ev) => {
        if (ev.target.value === 'admin') {
            history.push(`/admin`);
        }
    }

    return (
        <div className="ca side-bar">
            <NavLink className="nav-override-color" to="/page-01">Page-01</NavLink>
            <NavLink className="nav-override-color" to="/page-02">Page-02</NavLink>
            <NavLink className="nav-override-color" to="/profile">Profile</NavLink>
            <button value='admin' onClick={clickHandler}>Admin</button>
        </div>
    )

}

