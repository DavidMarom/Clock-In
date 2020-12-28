import React from "react";
import { NavLink } from "react-router-dom";
// import history from "../history";

export const SideBar = () => {
  // const clickHandler = (ev) => {
  //     if (ev.target.value === 'admin') {
  //         history.push(`/admin`);
  //     }
  // }

  return (
    <div className="cbl side-bar">
      <p className="title">My Stuff</p>
      <NavLink className="nav-override-color" to="/clockin">
        <i className="fas fa-door-open"></i> Clock in/out
      </NavLink>
      {/* <NavLink className="nav-override-color" to="/messages">
        <i className="fas fa-envelope"></i> Messages
      </NavLink> */}
      <NavLink className="nav-override-color" to="/documents">
        <i className="fas fa-file-contract"></i> Documents
      </NavLink>
      <NavLink className="nav-override-color" to="/timeoff">
        <i className="fas fa-stopwatch"></i> Time off
      </NavLink>
      <NavLink className="nav-override-color" to="/profile">
        <i className="fas fa-user-circle"></i> Profile
      </NavLink>
      {/* <button value='admin' onClick={clickHandler}>Admin</button> */}

      <p className="title"></p>
      <p className="title">Admin</p>
      <NavLink className="nav-override-color" to="/employees">
        <i className="fas fa-users"></i> Employees
      </NavLink>
      <NavLink className="nav-override-color" to="/reports">
        <i className="fas fa-chart-pie"></i> Reports
      </NavLink>
      <NavLink className="nav-override-color" to="/announcments">
        <i className="fas fa-bullhorn"></i> Announcements
      </NavLink>
    </div>
  );
};
