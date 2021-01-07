// ************************************
// * THIS IS THE CLOCK-IN-OUT PAGE    *
// ************************************

import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { loadUsers, login, logout, signup, updateUser, getUserById, setPageName } from '../store/actions/userActions';
import { connect } from 'react-redux';
import { userService } from '../services/userService';
import { TodayPillar } from '../cmps/TodayPillar';
import { TotalPillar } from '../cmps/TotalPillar';
import { Example } from '../cmps/Example';
import { timeService } from '../services/timeService';

const _Punch = (props) => {
    let { loggedInUser } = props;

    const [refresh, setRefresh] = useState(0);

    let currentTime = new Date()
    const currYear = currentTime.getFullYear();
    const currMonth = currentTime.getMonth() + 1;
    const today = currentTime.getDate();
    let sum = 0;

    useEffect(() => {
        props.setPageName('Clock in / out');
        // console.log(timeService.getLast3Months());
        console.log(timeService.sumHours(loggedInUser, [2021, 1]));


    }, [refresh, props.loggedInUser]);



    const doRefresh = () => {
        setRefresh(refresh + 1);
    }

    const doUpdate = async ev => {
        props.updateUser(loggedInUser);
        sessionStorage.setItem('user', JSON.stringify(loggedInUser))
    };

    // if no hours
    if (!loggedInUser.hours) {
        loggedInUser = { ...loggedInUser, hours: {} };
        sessionStorage.setItem('user', JSON.stringify(loggedInUser))
        doUpdate();
    }

    // if no year
    if (!loggedInUser.hours[currYear]) {
        loggedInUser.hours = { ...loggedInUser.hours, [currYear]: {} };
        sessionStorage.setItem('user', JSON.stringify(loggedInUser))
        doUpdate();
    }

    // if no month
    if (!loggedInUser.hours[currYear][currMonth]) {
        loggedInUser.hours[currYear] = { ...loggedInUser.hours[currYear], [currMonth]: {} };
        sessionStorage.setItem('user', JSON.stringify(loggedInUser))
        doUpdate();
    }

    // if no today
    if (!userService.hasToday(loggedInUser)) {
        loggedInUser.hours[currYear][currMonth] = { ...loggedInUser.hours[currYear][currMonth], [today]: [] }
    }

    let hours = Object.entries(loggedInUser.hours[currYear][currMonth]);

    return (
        <div>
            <Example />
            <div className="pillars-strip">
                <div className="pillar">
                    <p className="small-text">
                        Today
                    </p>
                    <TodayPillar doRefresh={doRefresh} />
                </div>
                <div className="pillar">
                    <p className="small-text">Total working hours</p>
                    <TotalPillar />
                </div>
                <div className="pillar">
                    <p className="small-text">Projects</p>

                </div>
                <div className="pillar">
                    <p className="small-text">sales trends</p>

                </div>
            </div>

            <div className="table-wrapper">
                <div className="table-head2">
                    <p className="tch">Day</p>
                    <p className="tch">In</p>
                    <p className="tch">Out</p>
                    <p className="tch">Total</p>
                </div>

                {hours.map((day, idx) => {
                    if (day[1].length > 1) {
                        sum += (day[1][1] - day[1][0]);
                    }

                    if (day[1].length > 0) {
                        return (

                            <div key={idx} className="table2">
                                <p className="tc">{day[0]}</p>
                                <p className="tc">{moment.unix(day[1][0]).format('HH:mm')}</p>
                                {(day[1].length > 1 ? <p className="tc">{moment.unix(day[1][1]).format('HH:mm')}</p> : <p className="tc">-</p>)}

                                {(day[1].length > 1 ?
                                    (
                                        <p className="tc">
                                            {Math.floor(((day[1][1] - day[1][0])) / 3600)}h⠀
                                            {Math.round((((day[1][1] - day[1][0]) / 3600) % 1) * 60)}m
                                        </p>
                                    )

                                    : <p className="tc">-</p>)}
                            </div>
                        )
                    }
                })}

                <div className="table-head2">
                    <p className="tch"></p>
                    <p className="tch"></p>
                    <p className="tch"></p>
                    <p className="tch">
                        {Math.floor(((sum)) / 3600)}h⠀
                        {Math.round((((sum) / 3600) % 1) * 60)}m

                    </p>
                </div>

            </div>
        </div >
    )
}

const mapStateToProps = state => {
    return {
        users: state.user.users,
        loggedInUser: state.user.loggedInUser,
        isLoading: state.system.isLoading
    };
};

const mapDispatchToProps = {
    setPageName, login, logout, signup, loadUsers, updateUser, getUserById
};

export const Punch = connect(mapStateToProps, mapDispatchToProps)(_Punch);