import React from "react";
import { connect } from "react-redux";

const _UserAndRole = (props) => {
  return (
    <div className="userandrole cbl3">
      {/* <div className="search"></div> */}
      <div className="username">{props.loggedInUser.name}</div>
      <div className="role">{props.loggedInUser.role}</div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    loggedInUser: state.user.loggedInUser,
  };
  
};
const mapDispatchToProps = {
};
export const UserAndRole = connect(mapStateToProps, mapDispatchToProps)(_UserAndRole);
