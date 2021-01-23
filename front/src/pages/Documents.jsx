import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageName } from "../store/actions/userActions";
const docs_img = require("../assets/img/docs.jpg");

export const Documents = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Hook option 2: dispatch({type:'PAGE_NAME',name:'Documents'})
    dispatch(setPageName("Documents"));
  });

  return (
    <div>
      <h1>Documents: </h1>
      <img src={docs_img} alt=""></img>
      <div className="table-wrapper">
       test test
        
      </div>
    </div>
  );
};