import React, { useEffect, useState } from "react"
import { updateUser } from '../store/actions/userActions';
import { connect } from 'react-redux';
import { userService } from '../services/userService';

export const _TodayPillar = (props) => {
    let { loggedInUser } = props;
    let currentTime = new Date()
    const currYear = currentTime.getFullYear();
    const currMonth = currentTime.getMonth() + 1;
    const today = currentTime.getDate();

    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        console.log(refresh);
    }
        , [refresh]
    );

    const doOut = () => {
        loggedInUser.hours[currYear][currMonth][today].push(Math.round(Date.now() / 1000));
        props.doRefresh();
    }

    const doIn = () => {
        loggedInUser.hours[currYear][currMonth][today].push(Math.round(Date.now() / 1000));
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