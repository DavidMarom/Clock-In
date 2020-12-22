import React from 'react'
import { connect } from 'react-redux';

const _Example = (props) =>{
    return (
        <div>
            {console.log(props.loggedInUser)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.user.loggedInUser,
    };
};

export const Example = connect(mapStateToProps, null)(_Example);