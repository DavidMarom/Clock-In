import React from "react";
import { updateUser } from '../store/actions/userActions';
import { connect } from "react-redux";
import Playimg from "../assets/img/play_circle_filled_24px_outlined.png";
import { userService } from '../services/userService';


function _PopUpWelcome(props) {
    let { loggedInUser } = props;

    let currentTime = new Date()
    const currYear = currentTime.getFullYear();
    const currMonth = currentTime.getMonth() + 1;
    const today = currentTime.getDate();


    // if no hours
    if (!loggedInUser.hours) {
        loggedInUser = { ...loggedInUser, hours: {} };
        sessionStorage.setItem('user', JSON.stringify(loggedInUser))
        // doUpdate();
    }

    // if no year
    if (!loggedInUser.hours[currYear]) {
        loggedInUser.hours = { ...loggedInUser.hours, [currYear]: {} };
        sessionStorage.setItem('user', JSON.stringify(loggedInUser))
        // doUpdate();
    }

    // if no month
    if (!loggedInUser.hours[currYear][currMonth]) {
        loggedInUser.hours[currYear] = { ...loggedInUser.hours[currYear], [currMonth]: {} };
        sessionStorage.setItem('user', JSON.stringify(loggedInUser))
        // doUpdate();
    }

    // if no today
    if (!userService.hasToday(loggedInUser)) {
        loggedInUser.hours[currYear][currMonth] = { ...loggedInUser.hours[currYear][currMonth], [today]: [] }
    }


    const doInOut = async ev => {
        loggedInUser.hours[currYear][currMonth][today].push(Math.round(Date.now() / 1000));
        props.updateUser(loggedInUser);
        sessionStorage.setItem('user', JSON.stringify(loggedInUser))
        // props.doRefresh();
        props.toggle();
    }

    return (
        <div>
            <div className="relative">
                {/* If user is out, dont display pop-up */}
                {(userService.hasOutHour(loggedInUser) ? null :
                    <div>
                        <div className="purple-bg"></div>
                        <div className="pop-image"></div>
                        <div className="popup2 ca">
                            <div className="rb">
                                <div></div>
                                <button className="close-x" onClick={props.toggle}>X</button>

                            </div>


                            <h1>Welcome Back, {props.loggedInUser.name} !</h1>
                            {(userService.hasInHour(loggedInUser) ?
                                <div className="grey-text">Leaving so soon?</div> :
                                <div className="grey-text">start your working day</div>)}
                            <div className="hour-popup"><b>
                                {new Date().getHours()} : {(new Date().getMinutes() < 10 ? 0 : null)}{new Date().getMinutes()}</b>
                            </div>

                            {(userService.hasInHour(loggedInUser) ?
                                <button className="clock-btn tvalign" onClick={doInOut}><i className="far fa-play-circle fa-2x tvalign"></i> CLOCK OUT</button> :
                                <button className="clock-btn tvalign" onClick={doInOut}><i className="far fa-play-circle fa-2x tvalign"></i> CLOCK IN</button>)}

                            <button className="skip-text" onClick={props.toggle}>Skip for now</button>

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

const mapDispatchToProps = {
    updateUser
};

export const PopUpWelcome = connect(mapStateToProps, mapDispatchToProps)(_PopUpWelcome);