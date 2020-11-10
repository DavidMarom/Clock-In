import React from 'react';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { logout } from '../store/actions/userActions';

const logo = require('../assets/img/joe-logo.jpg')

function _NavBar(props) {
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
                                {/* <NavLink to="/page-01">Page-01</NavLink>
                                <NavLink to="/page-02">Page-02</NavLink> */}
                                {/* <NavLink to="/login">login</NavLink> */}
                                <button onClick={props.logout}>Logout</button>
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