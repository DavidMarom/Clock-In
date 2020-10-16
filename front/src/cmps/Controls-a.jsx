import React from 'react';
import { connect } from 'react-redux';

import { onInc_a, onDec_a } from "../store/actions/action-a";


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

const mapDispatchToProps = {
    onInc_a,
    onDec_a
};

export default connect(mapStateToProps, mapDispatchToProps)(_AddButton_a);