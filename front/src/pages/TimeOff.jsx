import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { setPageName } from "../store/actions/userActions";

const _TimeOff = (props) => {

  useEffect(() => {
    props.setPageName('Request Time Off');
  }, []);


  return (
    <div>

      <p>This feature will be available soon...</p>
    </div>
  )
};

const mapDispatchToProps = {
  setPageName
};

export const TimeOff = connect(null, mapDispatchToProps)(_TimeOff);