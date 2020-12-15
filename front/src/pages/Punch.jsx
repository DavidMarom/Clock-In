import React from 'react'
import moment from 'moment'
import { loadUsers, login, logout, signup, updateUser, getUserById } from '../store/actions/userActions';
import { connect } from 'react-redux';

const _Punch = (props) => {
    const currYear = 20;
    const currMonth = 12;
    let sum = 0;
    var { loggedInUser } = props;
    const hours = Object.entries(loggedInUser.hours[currYear][currMonth]);

    return (
        <div>
            <h1>Clock in/out</h1>
            <div>
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