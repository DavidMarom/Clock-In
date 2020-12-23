import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setPageName } from "../store/actions/userActions";

const _Documents = (props) => {


  useEffect(() => {
    props.setPageName('Documents');
  }, []);


  return <h1> Document List:</h1>;
};

const mapDispatchToProps = {
  setPageName
};

export const Documents = connect(null, mapDispatchToProps)(_Documents);