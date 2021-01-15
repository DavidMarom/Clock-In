import React, { useEffect } from 'react'
import { loadAnn } from '../store/actions/annActions';

import { setPageName } from "../store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

export const Announcments = (props) => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(loadAnn()) }, []);
  var ann = useSelector((state) => state.annReducer.ann);



  useEffect(() => {
    dispatch(setPageName('Announcments'));
  });

  return (
    <div>
      <h1>Announcments</h1>
      <p>{ann[0].title}</p>
    </div>
  );
};