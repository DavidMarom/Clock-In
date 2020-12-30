import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageName } from "../store/actions/userActions";
import { AddButton_a } from "../cmps/Controls-a";
import CounterA from "../cmps/Counter-a";

const _Documents = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // OLD
    // props.setPageName('Documents');

    // NEW
    // opt 1
    // dispatch({type:'PAGE_NAME',name:'Documents'})
    // opt 2
    dispatch(setPageName("Documents"));
  }, []);

  return (
    <div>
      <h1> Document List:</h1>
      This is a temporary page to test the redux hooks
      <CounterA />
      <AddButton_a />
    </div>
  );
};

// OLD WAY
// const mapDispatchToProps = {
//   setPageName
// };
// export const Documents = connect(null, mapDispatchToProps)(_Documents);

export const Documents = _Documents;
