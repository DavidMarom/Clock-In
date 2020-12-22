import React from "react"

import { updateUser } from '../store/actions/userActions';
import { connect } from 'react-redux';
import { userService } from '../services/userService';

const _TodayPillar = (props) => {
    let { loggedInUser } = props;
    let currentTime = new Date()
    const currYear = currentTime.getFullYear();
    const currMonth = currentTime.getMonth() + 1;
    const today = currentTime.getDate();

    const doOut = async ev => {
        ev.preventDefault();
        loggedInUser.hours[currYear][currMonth][today].push(Math.round(Date.now() / 1000));
        props.updateUser(loggedInUser);
        sessionStorage.setItem('user', JSON.stringify(loggedInUser))
    };

    const doIn = async ev => {
        ev.preventDefault();
        loggedInUser.hours[currYear][currMonth][today].push(Math.round(Date.now() / 1000));
        props.updateUser(loggedInUser);
        props.doRefresh();
    }

    return (
        <div>
            {  userService.hasInHour(loggedInUser) ?
                (userService.hasOutHour(loggedInUser) ? <p>Have a nice evening</p> : <button onClick={doOut} >Clock-Out</button>)
                :
                <button onClick={doIn} >Clock-In</button>
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