import React from 'react'
import { NavLink } from "react-router-dom";

const logo = require('../assets/img/joe-logo.jpg')

export function NavBar() {
    return (
        <div>
            <div className="outter-container nav-bar drop-shadow">
                <div className="inner-container">

                    <div className="ra">
                        <div className="rb">
                            <NavLink to="/"><img src={logo} alt="Hey-Joe" /></NavLink>
                        </div>

                        <div className="ca">
                            <div className="ra">
                                <NavLink to="/page-01">Page-01</NavLink>
                                <NavLink to="/page-02">Page-02</NavLink>
                            </div>

                        </div>
                    </div>




                </div>
            </div>
        </div>
    )
}
