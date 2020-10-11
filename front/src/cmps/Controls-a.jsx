import React from 'react';
import { connect } from 'react-redux';


function _AddButton_a(props) {
    return (
        <div>
            <button onClick={props.onInc_a}>+</button>
            <button onClick={props.onDec_a}>-</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ctr: state.reducerA.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onInc_a: () => dispatch({ type: 'INC_A' }),
        onDec_a: () => dispatch({ type: 'DEC_A' })

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(_AddButton_a);