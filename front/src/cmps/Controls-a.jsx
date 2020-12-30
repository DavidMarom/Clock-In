import React from "react";
import { useDispatch } from "react-redux";
import { onInc_a } from "../store/actions/action-a";

function _AddButton_a() {
  const dispatch = useDispatch();

  return (
    // <div>
    //     <button onClick={props.onInc_a}>+</button>
    //     <button onClick={props.onDec_a}>-</button>
    // </div>

    <div>
      {/* OPT 1 */}
      {/* <button onClick={() => dispatch({ type: "INC_A" })}>+</button> */}

      {/* OPT 2 */}
      <button onClick={() => dispatch(onInc_a())}>+</button>
      <button onClick={() => dispatch({ type: "DEC_A" })}>-</button>
    </div>
  );
}

// const mapStateToProps = state => {
//     return {
//         ctr: state.reducerA.counter
//     };
// };
// const mapDispatchToProps = {
//     // onInc_a,
//     onDec_a
// };
// export const AddButton_a =  connect(null, mapDispatchToProps)(_AddButton_a);

export const AddButton_a = _AddButton_a;
