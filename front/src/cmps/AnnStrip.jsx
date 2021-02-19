import React from 'react'
import { timeService } from '../services/timeService';

export const AnnStrip = (props) => {

    const day = new Date(props.ann.date)

    return (
        <a href={props.ann.link} target="_blank">

            <div className="cbl2">
                <div className="pillar-head-dark">{props.ann.title}</div>
                <div className="pillar-sub-head">{props.ann.subTitle}</div>



                <div className="ann-small-text">

                    {props.ann.type === 'meeting' ? <i className="far fa-calendar-alt mrg-r-10 ann-icon"></i> : null}
                    {props.ann.type === 'birthday' ? <i className="fas fa-birthday-cake mrg-r-10 ann-icon2"></i> : null}

                    {day.getDate()} {timeService.numToMonth(day.getMonth() + 1)}, {day.getFullYear()}
                </div>
                <div className="divider"></div>
                <p></p>
            </div>
        </a>
    )
}
