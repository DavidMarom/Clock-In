import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { setPageName } from "../store/actions/userActions";

const _Announcments = ( props ) => {

  useEffect(() => {
    props.setPageName('Announcments');
}, []);


  return <h1>Announcments</h1>;
};

const mapDispatchToProps = {
  setPageName
};

export const Announcments = connect(null, mapDispatchToProps)(_Announcments);