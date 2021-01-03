import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/userActions";
import TopBar from "../cmps/TopBar";

const logo = require("../assets/img/logo.png");

function _NavBar(props) {
  return (
    <div>
      <div className="outter-container nav-bar">
        <div className="inner-container">
          <div className="rb bg-07">
            <NavLink to="/home">
              <div className="rb logo-cube">
                <img
                  className="marg-center"
                  src={logo}
                  width={"180px"}
                  alt="Clock-In"
                ></img>
              </div>
            </NavLink>

            <div className="rb pad-1rem">
              <div className="ca">
                <div className="ra">
                  <h2>{props.pageName}</h2>
                </div>
              </div>
              <div className="ca">
                <div className="ra">
                  <TopBar />
                  <button className="logout-btn" onClick={props.logout}>
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loggedInUser: state.user.loggedInUser,
    pageName: state.user.pageName,
  };
};
const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(_NavBar);
