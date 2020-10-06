import React from 'react'
import { NavLink } from "react-router-dom";

export function NavBar() {
    return (
        <div>
            <NavLink to="/">Home</NavLink> -
            <NavLink to="/page-01">Page 01</NavLink> -
            <NavLink to="/page-02">Page 02</NavLink>

        </div>
    )
}
