import React, { Component } from 'react';
import { connect } from 'react-redux';

class _Counter_b extends Component {

    render() {
        return (
            <div>
                <h3>{this.props.ctr_b}</h3>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ctr_b: state.reducerB.counter_b
    };
};

// no need for mapDispatchToProps - we dont dispatch anything

export default connect(mapStateToProps, null)(_Counter_b);