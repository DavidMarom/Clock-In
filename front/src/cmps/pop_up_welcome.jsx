import React from 'react'
import { connect } from "react-redux";

function _PopUpWelcome(props) {
    return (
        <div className="relative">


            <div className="popup">
                <h2>Welcome {props.loggedInUser.name}</h2>
                <p>This is a temporarry popup</p>
                <p>Amazing, isn't it?</p>
                <p>Now close it...</p>
                
                <button onClick={props.toggle}>close</button>
            </div>


        </div>
    )
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.user.loggedInUser,
    };
};

export const PopUpWelcome = connect(mapStateToProps, null)(_PopUpWelcome);