import React from 'react';
import { connect } from 'react-redux';


function _AddButton_b(props) {
    return (
        <div>
            <button onClick={props.onInc_b}>+</button>
            <button onClick={props.onDec_b}>-</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ctr_b: state.reducerB.counter_b
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onInc_b: () => dispatch({ type: 'INC_B' }),
        onDec_b: () => dispatch({ type: 'DEC_B' })

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(_AddButton_b);