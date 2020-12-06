import React from 'react'
import moment from 'moment'

export const Punch = () => {
    console.log(  moment().format('LT') );

    var dummy = {
        20: [
            {
                12:[
                    {
                        1:[3,4],
                        2:[2,5]
                    }
                ]
            }
        ]
    }

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
                <p className="tc">09:18</p>
                <p className="tc">18:04</p>
                <p className="tc">8:47</p>

            </div>
            <div className="table2">
                <p className="tc">02</p>
                <p className="tc">09:38</p>
                <p className="tc">18:23</p>
                <p className="tc">8:27</p>

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
