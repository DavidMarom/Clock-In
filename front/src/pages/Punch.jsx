import React from 'react'
import moment from 'moment'

export const Punch = () => {


    // dummy data:
    var hours = {
        20: {
            12: {
                1: [1606806000, 1606809600],
                2: [1606806000, 1606806000]
            }
        }
    }

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
                <p className="tc">17:24</p>

            </div>
        </div>
    )
}
