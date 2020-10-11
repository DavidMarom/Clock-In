import React, { Component } from 'react';
import { connect } from 'react-redux';

class _Counter extends Component {

    render() {
        return (
            <div>
                <h3>{this.props.ctr_a}</h3>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ctr_a: state.reducerA.counter_a
    };
};

// no need for mapDispatchToProps - we dont dispatch anything

export default connect(mapStateToProps, null)(_Counter);