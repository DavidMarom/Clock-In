import React from 'react'
import moment from 'moment'

import { connect } from 'react-redux';

const _Punch = (props) => {


    const { loggedInUser } = props;
    const hours = loggedInUser.hours;

    const currYear = 20;
    const currMonth = 12;
    
    return (
        <div>
            <h1>Clock in/out</h1>

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
                <p className="tc">{moment.unix(      (hours[currYear][currMonth][2][1] - hours[currYear][currMonth][2][0])     -    50400).format('hh:mm')}</p>
            </div>

            
            {/* {for (var key in hours[currYear][currMonth]) {
                if (hours.[currYear].[currMonth].hasOwnProperty(key)) {
                console.log(key + " -> " + hours[currYear][currMonth][key]);
            }
        }
    } */}

            <div className="table-head2">
                <p className="tc"></p>
                <p className="tc"></p>
                <p className="tc"></p>
                <p className="tc">{moment.unix((hours[currYear][currMonth][2][1] - hours[currYear][currMonth][2][0]) + (hours[currYear][currMonth][1][1] - hours[currYear][currMonth][1][0]) - 50400).format('hh:mm') }</p>

            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.user.users,
        loggedInUser: state.user.loggedInUser,
        isLoading: state.system.isLoading
    };
};


export const Punch = connect(mapStateToProps, null)(_Punch);



