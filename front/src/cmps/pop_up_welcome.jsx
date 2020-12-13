import React from "react";
import { connect } from "react-redux";
import Playimg from "../assets/img/play_circle_filled_24px_outlined.png";

function _PopUpWelcome(props) {
    return (
        <div className="relative">
            <div className="popup">
                <img className="pic" alt="" />
                <h2>Welcome Back {props.loggedInUser.name}</h2>
                <img src={Playimg} className="play" alt="" />
                <h1>8:30</h1>
                <p>Start your working day!</p>

                <button onClick={props.toggle}>not now</button>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.user.loggedInUser,
    };
};

export const PopUpWelcome = connect(mapStateToProps, null)(_PopUpWelcome);