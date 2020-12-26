import React from "react";
import { connect } from "react-redux";
import Playimg from "../assets/img/play_circle_filled_24px_outlined.png";
import { userService } from '../services/userService';


function _PopUpWelcome(props) {
    let { loggedInUser } = props;

    return (
        <div>
            <div className="relative">
                {/* If user is out, dont display pop-up */}
                {(userService.hasOutHour(loggedInUser) ? null :
                    <div>
                        <div className="purple-bg"></div>

                        <div className="popup">
                            <img className="pic" alt="" />

                            <div className="ra">
                                <h2>Welcome Back {props.loggedInUser.name}</h2>
                                <button onClick={props.toggle}>not now</button>

                            </div>

                            {(
                                userService.hasInHour(loggedInUser) ? 
                                
                                
                                
                                <button>Clock-Out</button> : <button>Clock-In</button>


                            )}

                            <h1>{new Date().getHours()} : {new Date().getMinutes()}</h1>
                            {(
                                userService.hasInHour(loggedInUser) ? <p>Leaving so soon?</p> : <p>Good morning!</p>


                            )}

                            

                        </div>
                    </div>
                )}

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