import React from "react";
import { useSelector } from "react-redux";

const _UserAndRole = () => {
  const loggedInUser = useSelector(state => state.user.loggedInUser)
  return (
    <div className="userandrole cbl3">
      {/* <div className="search"></div> */}
      <div className="username">{loggedInUser.name}</div>
      <div className="role">{loggedInUser.role}</div>
    </div>
  )
}


export const UserAndRole =(_UserAndRole);
