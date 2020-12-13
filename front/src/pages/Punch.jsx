import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { loadUsers, login, logout, signup, updateUser, getUserById } from '../store/actions/userActions';
import { connect } from 'react-redux';

const _Punch = (props) => {
    // useEffect(() => {
    //     console.log('aaaaaaaaaaaaaaaa');
    // }, loggedInUser);

    var { loggedInUser } = props;
    const hours = loggedInUser.hours;

    const currYear = 20;
    const currMonth = 12;

    // if (!loggedInUser.hours) {
    //     loggedInUser = {
    //         ...loggedInUser,
    //         hours: {
    //             20: {
    //                 12: {
    //                     1: [1606806000, 1606809600],
    //                     2: [1606806000, 1606813000]
    //                 }
    //             }
    //         }
    //     }
    //     props.updateUser(loggedInUser);
    // }

    return (
        <div>
            <h1>Clock in/out</h1>
            {
                (loggedInUser.hours
                    ?
                    <div>

                        <div className="table-head2">
                            <p className="tch">Day</p>
                            <p className="tch">In</p>
                            <p className="tch">Out</p>
                            <p className="tch">Total</p>
                        </div>

                        <div className="table2">
                            <p className="tc">01</p>
                            <p className="tc">{moment.unix(hours[currYear][currMonth][1][0]).format('hh:mm')}</p>
                            <p className="tc">{moment.unix(hours[currYear][currMonth][1][1]).format('hh:mm')}</p>
                            <p className="tc">{moment.unix(hours[currYear][currMonth][1][1] - hours[currYear][currMonth][1][0] - 50400).format('hh:mm')}</p>
                        </div>

                        <div className="table2">
                            <p className="tc">02</p>
                            <p className="tc">{moment.unix(hours[currYear][currMonth][2][0]).format('hh:mm')}</p>
                            <p className="tc">{moment.unix(hours[currYear][currMonth][2][1]).format('hh:mm')}</p>
                            <p className="tc">{moment.unix((hours[currYear][currMonth][2][1] - hours[currYear][currMonth][2][0]) - 50400).format('hh:mm')}</p>
                        </div>

                        <div className="table-head2">
                            <p className="tc"></p>
                            <p className="tc"></p>
                            <p className="tc"></p>
                            <p className="tc">{moment.unix((hours[currYear][currMonth][2][1] - hours[currYear][currMonth][2][0]) + (hours[currYear][currMonth][1][1] - hours[currYear][currMonth][1][0]) - 50400).format('hh:mm')}</p>

                        </div>
                    </div>

                    :

                    <h2>You dont have hours data yet. This feature is in development</h2>
                )


            }


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



