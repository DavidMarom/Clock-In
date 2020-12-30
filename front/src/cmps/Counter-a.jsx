import React from "react";
import { useSelector } from "react-redux";

const _Counter = () => {
  const ctr_a = useSelector((state) => state.reducerA.counter_a);
  return (
    <div>
      <h3>{ctr_a}</h3>
      <p>{JSON.stringify({ ctr_a })}</p>
    </div>
  );
};

export default _Counter;

// class _Counter extends Component {

//     render() {
//         return (
//             <div>

//             </div>
//         )
//     }
// }

// const mapStateToProps = state => {
//     return {
//         ctr_a: state.reducerA.counter_a
//     };
// };

// // no need for mapDispatchToProps - we dont dispatch anything
// export default connect(mapStateToProps, null)(_Counter);
