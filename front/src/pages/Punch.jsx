import React from 'react'
import moment from 'moment'
import { loadUsers, login, logout, signup, updateUser, getUserById } from '../store/actions/userActions';
import { connect } from 'react-redux';

const _Punch = (props) => {
    var currentTime = new Date()
    const currYear = currentTime.getFullYear();
    const currMonth = currentTime.getMonth() + 1;
    let sum = 0;

    var { loggedInUser } = props;

    // if the current month doesn't appear in the DB, create it in the local "loggedInUser" object. no need to update DB - it will be updated once clock-in is clicked
    if (!loggedInUser.hours[currYear][currMonth]) {
        console.log('no such month');
        loggedInUser.hours[currYear] = { ...loggedInUser.hours[currYear], [currMonth]: {} }
    }

    let hours = Object.entries(loggedInUser.hours[currYear][currMonth]);

    return (
        <div>
            <div className="table-wrapper">
                <div className="table-head2">
                    <p className="tch">Day</p>
                    <p className="tch">In</p>
                    <p className="tch">Out</p>
                    <p className="tch">Total</p>
                </div>
                {hours.map((day, idx) => {
                    sum += (day[1][1] - day[1][0]);
                    return (
                        <div key={idx} className="table2">
                            <p className="tc">{day[0][0]}</p>
                            <p className="tc">{moment.unix(day[1][0]).format('hh:mm')}</p>
                            <p className="tc">{moment.unix(day[1][1]).format('hh:mm')}</p>
                            <p className="tc">{moment.unix((day[1][1] - day[1][0]) - 50400).format('hh:mm')}  </p>
                        </div>
                    )
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