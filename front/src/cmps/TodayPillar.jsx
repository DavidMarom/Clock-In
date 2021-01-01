import React, { useEffect } from "react"

import { updateUser } from '../store/actions/userActions';
import { connect } from 'react-redux';
import { userService } from '../services/userService';

const _TodayPillar = (props) => {
    let { loggedInUser } = props;
    let currentTime = new Date()
    const currYear = currentTime.getFullYear();
    const currMonth = currentTime.getMonth() + 1;
    const today = currentTime.getDate();

    useEffect(() => { }, []);

    const doInOut = async ev => {
        loggedInUser.hours[currYear][currMonth][today].push(Math.round(Date.now() / 1000));
        props.updateUser(loggedInUser);
        sessionStorage.setItem('user', JSON.stringify(loggedInUser))
        props.doRefresh();
    }

    return (
        <div>
            {  userService.hasInHour(loggedInUser) ?
                // IN-YES, OUT ?
                userService.hasOutHour(loggedInUser) ?
                    // IN-YES, OUT-YES
                    <p>Have a nice evening</p> :

                    // IN-YES, OUT-NO -- IN THE OFFICE
                    <div className="cb h150">
                        <div className="cb">
                            <div className="pillar-head">{currentTime.toLocaleString("default", { weekday: "short" })}, {currentTime.toLocaleString("default", { month: "short" })} {today}</div>
                            <div className="pillar-sub-head">Clocked in: Today at 07:58</div>
                        </div>
                        <div className="pillar-turqize">2h 24m</div>
                        <button onClick={doInOut} className="red-check-out"><i className="far fa-stop-circle fa-2x tvalign"></i> CLOCK OUT</button>
                    </div>
                :
                // IN-NO, OUT-NO

                <div className="cb h150">
                    <div className="cb">
                        <div className="pillar-head">{currentTime.toLocaleString("default", { weekday: "short" })}, {currentTime.toLocaleString("default", { month: "short" })} {today}</div>
                        <div className="pillar-sub-head">You have not clocked-in yet</div>
                    </div>
                    <div className="pillar-turqize">0h 0m</div>
                    <button onClick={doInOut} className="green-check-in"><i className="far fa-play-circle fa-2x tvalign"></i> CLOCK IN</button>
                </div>

            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.user.users,
        loggedInUser: state.user.loggedInUser,
    };
};

const mapDispatchToProps = {
    updateUser
};

export const TodayPillar = connect(mapStateToProps, mapDispatchToProps)(_TodayPillar);