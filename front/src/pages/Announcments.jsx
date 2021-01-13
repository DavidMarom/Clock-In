import React, { useEffect } from 'react'
import { setPageName } from "../store/actions/userActions";
import { useDispatch } from "react-redux";

export const Announcments = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageName('Announcments'));
  });

  return <h1>Announcments</h1>;
};