import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { setPageName } from "../store/actions/userActions";

const _Reports = (props) => {

  useEffect(() => {
    props.setPageName('Reports');
}, []);


  return <h1>Reports</h1>;
};


const mapDispatchToProps = {
  setPageName
};

export const Reports = connect(null, mapDispatchToProps)(_Reports);