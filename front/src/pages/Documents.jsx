import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setPageName } from "../store/actions/userActions";
import { AddButton_a } from "../cmps/Controls-a";
import CounterA from "../cmps/Counter-a";

const _Documents = (props) => {


  useEffect(() => {
    props.setPageName('Documents');
  }, []);


  return (
    <div>

      <h1> Document List:</h1>
      This is a temporary page to test the redux hooks
      <CounterA />
      <AddButton_a />

    </div>
    )
};


const mapStateToProps = state => {
  return {
    users: state.user.users,
    loggedInUser: state.user.loggedInUser,
    isLoading: state.system.isLoading
  };
};

const mapDispatchToProps = {
  setPageName

};

export const Documents = connect(mapStateToProps, mapDispatchToProps)(_Documents);