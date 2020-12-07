import React from 'react'
import moment from 'moment'

export const Punch = () => {
    console.log(moment().format('LT'));

// dummy data:
    var hours = {
        20: {
            12: {
                1: [1606813200, 1606845600], // 9:00 - 18:00
                2: [1606899600, 1606932000]  // 9:00 - 18:00
            }
        }
    }


    const currYear = 20;
    const currMonth = 12;


    return (
        <div>
            <h1>Punch in/out</h1>

            <div className="table-head2">
                <p className="tch">Day</p>
                <p className="tch">In</p>
                <p className="tch">Out</p>
                <p className="tch">Total</p>
            </div>

            <div className="table2">
                <p className="tc">01</p>
                <p className="tc">{hours.[currYear].[currMonth][1][0]}</p>
                <p className="tc">{hours.[currYear].[currMonth][1][1]}</p>
                <p className="tc">{hours.[currYear].[currMonth][1][0] + (hours.[currYear].[currMonth][1][1] - hours.[currYear].[currMonth][1][0])}</p>

            </div>



            <div className="table-head2">
                <p className="tc"></p>
                <p className="tc"></p>
                <p className="tc"></p>
                <p className="tc">17:24</p>

            </div>
        </div>
    )
}
