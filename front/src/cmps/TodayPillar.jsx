import React from "react"
import { updateUser } from '../store/actions/userActions';
import { connect } from 'react-redux';
import { userService } from '../services/userService';

export const _TodayPillar = (props) => {
    let { loggedInUser } = props;
    let currentTime = new Date()
    const currYear = currentTime.getFullYear();
    const currMonth = currentTime.getMonth() + 1;
    const today = currentTime.getDate();


    const doOut = () => { console.log('************doOut'); }

    const doIn = () => {
        loggedInUser.hours[currYear][currMonth][today].push(64364);
        props.doRefresh();
        console.log('gggggggggggg');

    }


    return (
        <div>

            {  userService.hasOutHour(loggedInUser) ?
                <button onClick={doOut} >Clock-Out</button>
                :
                <button onClick={ doIn} >Clock-In</button>
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