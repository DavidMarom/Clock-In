import React from 'react';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { logout } from '../store/actions/userActions';

const logo = require('../assets/img/joe-logo.jpg')

function _NavBar(props) {
    return (
        <div>
            <div className="outter-container nav-bar">
                <div className="inner-container">

                    <div className="rb bg-07">

                        <NavLink to="/">
                            <div className="rb logo-cube"></div>
                        </NavLink>

                        <div className="rb pad-1rem">

                            <div className="ca">
                                <div className="ra">
                                    <h2>Page Title</h2>
                                </div>
                            </div>

                            <div className="ca">
                                <div className="ra">
                                    {/* <NavLink to="/page-01">Page-01</NavLink>
                                <NavLink to="/page-02">Page-02</NavLink> */}
                                    {/* <NavLink to="/login">login</NavLink> */}
                                    <button className="logout-btn" onClick={props.logout}>Logout</button>
                                </div>

                            </div>

                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.user.loggedInUser,
    };
};
const mapDispatchToProps = {
    logout
};

export default connect(mapStateToProps, mapDispatchToProps)(_NavBar);