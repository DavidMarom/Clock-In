import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export class SideBar extends Component {
    render() {
        return (
            <div>
                <div className="ca">
                    <div>Sidebar</div>
                    <NavLink to="/page-01">Page-01</NavLink>
                    <NavLink to="/page-02">Page-02</NavLink>
                </div>
            </div>
        )
    }
}
