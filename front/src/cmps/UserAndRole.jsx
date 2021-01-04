import React from "react";
import { connect } from "react-redux";

const _UserAndRole = (props) => {
  return (
    <div className="userandrole ra">
      <div className="search"></div>
      <h2 className="username">{props.loggedInUser.name}</h2>
      <h2>{props.loggedInUser.role}</h2>
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
