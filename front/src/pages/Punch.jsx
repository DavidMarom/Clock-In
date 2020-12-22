import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { loadUsers, login, logout, signup, updateUser, getUserById } from '../store/actions/userActions';
import { connect } from 'react-redux';
import { userService } from '../services/userService';
import { TodayPillar } from '../cmps/TodayPillar';
import { Example } from '../cmps/Example';

const _Punch = (props) => {
    let { loggedInUser } = props;

    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
    }
        , [refresh, props.loggedInUser]
    );

    let currentTime = new Date()
    const currYear = currentTime.getFullYear();
    const currMonth = currentTime.getMonth() + 1;
    const today = currentTime.getDate();
    let sum = 0;

    const doRefresh = () => {
        setRefresh(refresh + 1);
    }


    // if the current month doesn't appear in the DB, create it in the local "loggedInUser" object. no need to update DB - it will be updated once clock-in is clicked
    if (!loggedInUser.hours[currYear][currMonth]) {
        console.log('no such month');
        loggedInUser.hours[currYear] = { ...loggedInUser.hours[currYear], [currMonth]: {} }
    }

    // if user doesnt have a key of today's day - add it with an empty array
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
                    <p className="tch">{moment.unix(sum - 50400).format('hh:mm')}</p>
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
    login, logout, signup, loadUsers, updateUser, getUserById
};

export const Punch = connect(mapStateToProps, mapDispatchToProps)(_Punch);