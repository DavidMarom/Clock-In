import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import { setPageName } from "../store/actions/userActions";

const _TimeOff = (props) => {

  useEffect(() => {
    props.setPageName('Request Time Off');
  }, []);


  return (
    <div>

      <p>So, you think you deserve some time off??</p>
      <p>You slacker!</p>
      <p>NO SOUP FOR YOU!!</p>
    </div>
  )
};

const mapDispatchToProps = {
  setPageName
};

export const TimeOff = connect(null, mapDispatchToProps)(_TimeOff);