import React from 'react'
import { connect } from 'react-redux';

const _Example = (props) =>{
    return (
        <div>
            {/* {console.log(props.loggedInUser)} */}
        </div>
    )
}



const mapStateToProps = state => {
    return {
        loggedInUser: state.user.loggedInUser,
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onInc_b: () => dispatch({ type: 'INC_B' }),
        onDec_b: () => dispatch({ type: 'DEC_B' })

    }
}
export const Example = connect(mapStateToProps, mapDispatchToProps)(_Example);