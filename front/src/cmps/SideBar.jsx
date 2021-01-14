import React from "react";
import { NavLink } from "react-router-dom";
import {  useSelector } from "react-redux";


export const SideBar = () => {
  const pageName = useSelector((state) => state.user.pageName);


  return (
    <div className="cbl2 side-bar">
      <p className="title">My Stuff</p>

      <div className={(pageName === 'Clock in / out' ? "active-cell" : "inactive-cell")}>
        <NavLink to="/clockin"><i className="fas fa-door-open"></i> Clock in/out</NavLink>
      </div>

      <div className={(pageName === 'Documents' ? "active-cell" : "inactive-cell")}>
        <NavLink to="/documents"><i className="fas fa-file-contract"></i> Documents</NavLink>
      </div>

      <div className={(pageName === 'Request Time Off' ? "active-cell" : "inactive-cell")}>
        <NavLink to="/timeoff"><i className="fas fa-stopwatch"></i> Time off</NavLink>
      </div>

      <div className={(pageName === 'Profile' ? "active-cell" : "inactive-cell")}>
        <NavLink to="/profile"><i className="fas fa-user-circle"></i> Profile</NavLink>
      </div>

      <div className="seperator"></div>

      <p className="title"></p>
      <p className="title">Admin</p>

      <div className={(pageName === 'Employee List' ? "active-cell" : "inactive-cell")}>
        <NavLink to="/employees"><i className="fas fa-users"></i> Employees</NavLink>
      </div>

      <div className={(pageName === 'Reports' ? "active-cell" : "inactive-cell")}>
        <NavLink to="/reports"><i className="fas fa-chart-pie"></i> Reports</NavLink>
      </div>

      <div className={(pageName === 'Announcments' ? "active-cell" : "inactive-cell")}>
        <NavLink to="/announcments"><i className="fas fa-bullhorn"></i> Announcements</NavLink>
      </div>

      <div className={(pageName === 'Settings' ? "active-cell" : "inactive-cell")}>
        <NavLink to="/settings"><i className="fas fa-cog"></i> Settings</NavLink>
      </div>
    </div>
  );
};
