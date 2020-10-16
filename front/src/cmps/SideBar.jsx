import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import history from '../history';

export class SideBar extends Component {

    clickHandler() {
        history.push(`/admin`);
    }

    render() {
        return (
            <div className="ca side-bar">
                <div className="nav-override-color">Sidebar</div>
                <NavLink className="nav-override-color" to="/page-01">Page-01</NavLink>
                <NavLink className="nav-override-color" to="/page-02">Page-02</NavLink>
                <button onClick={() => this.clickHandler()}>Admin</button>
            </div>
        )
    }
}

