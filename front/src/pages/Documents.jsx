import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageName } from "../store/actions/userActions";

const _Documents = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    
    // HOOK:
    // opt 1
    // dispatch({type:'PAGE_NAME',name:'Documents'})
    // opt 2
    dispatch(setPageName("Documents"));
  });

  return (
    <div>
      <h1>Documents: </h1>
      
    </div>
  );
};

export const Documents = _Documents;
