import React, { useEffect } from "react"

import moment from 'moment'
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

    let totalSoFar = (Math.round(Date.now() / 1000)) - loggedInUser.hours[currYear][currMonth][today][0];

    return (
        <div>
            {  userService.hasInHour(loggedInUser) ?
                // IN-YES, OUT ?
                userService.hasOutHour(loggedInUser) ?
                    // IN-YES, OUT-YES
                    <div>
                        <p>You came at: {moment.unix(loggedInUser.hours[currYear][currMonth][today][0]).format('HH:mm')}</p>
                        <p>You left at: {moment.unix(loggedInUser.hours[currYear][currMonth][today][1]).format('HH:mm')}</p>
                        <p>Total:⠀
                        {Math.floor(((loggedInUser.hours[currYear][currMonth][today][1] - loggedInUser.hours[currYear][currMonth][today][0]) / 3600))}h⠀
                        {Math.round((((loggedInUser.hours[currYear][currMonth][today][1] - loggedInUser.hours[currYear][currMonth][today][0]) / 3600) % 1) * 60)}m
                        </p>
                    </div>
                    :
                    // IN-YES, OUT-NO -- IN THE OFFICE
                    <div className="cb h150">
                        <div className="cb">
                            <div className="pillar-head">{currentTime.toLocaleString("default", { weekday: "short" })}, {currentTime.toLocaleString("default", { month: "short" })} {today}</div>
                            <div className="pillar-sub-head">Clocked in: Today at {moment.unix(loggedInUser.hours[currYear][currMonth][today][0]).format('HH:mm')}</div>
                        </div>
                        <div className="pillar-turqize">{Math.floor(totalSoFar / 3600)}h {Math.round(((totalSoFar / 3600) % 1) * 60)}m</div>
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
        loggedInUser: state.user.loggedInUser,
    };
};

const mapDispatchToProps = {
    updateUser
};

export const TodayPillar = connect(mapStateToProps, mapDispatchToProps)(_TodayPillar);