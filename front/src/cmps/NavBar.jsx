import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import { loadSettings } from '../store/actions/settingsActions';

import { logout } from "../store/actions/userActions";
import { UserAndRole } from "./UserAndRole";
let tmp = 'https://res.cloudinary.com/dojmo7vcc/image/upload/v1610371061/clock/profile_wgiuu9.png';

function _NavBar(props) {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(loadSettings()) }, []);
  var settings = useSelector((state) => state.settingsReducer.settings);


  return (
    <div>
      <div className="rb bg-07">
        <NavLink to="/">
          <div className="logo-cube">
            <div className="center-cropped2">
              <img src={settings[0].img[0]} alt=""></img>
            </div>
          </div>
        </NavLink>
        <div className="rb pad-2rem-l">
          <div className="ca">
            <div className="ral w200"><h2>{props.pageName}</h2></div>
          </div>
          <div className="rar">
            <NavLink to="/profile">
              <UserAndRole />
            </NavLink>
            <div className="w100 pad-1rem">
              <NavLink to="/profile">
                <div className="center-cropped">
                  {(props.loggedInUser.img ? <img src={props.loggedInUser.img[0]} alt=""></img> : <img src={tmp} alt="" ></img>)}
                </div>
              </NavLink>
            </div>
            <button className="logout-btn w200" onClick={props.logout}>Logout</button>
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
  logout
};

export const NavBar = connect(mapStateToProps, mapDispatchToProps)(_NavBar);
