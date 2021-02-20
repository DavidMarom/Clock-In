import React from 'react'
import { timeService } from '../services/timeService';
import { removeAnn } from '../store/actions/annActions';

import { useDispatch, useSelector } from 'react-redux'


export const AnnStrip = (props) => {
    const dispatch = useDispatch()

    const day = new Date(props.ann.date)

    const delAnn = () => {
        dispatch(removeAnn(props.ann._id));


    }

    return (

        <div className="cbl2">
            <div className="rb">

                <div className="pillar-head-dark">
                    <a href={props.ann.link} target="_blank">{props.ann.title}</a>
                </div>
                <div className="pillar-head-dark trash-btn" onClick={() => delAnn(props.ann)}>
                    <i className="fas fa-trash-alt"></i>
                </div>
            </div>

            <div className="pillar-sub-head">{props.ann.subTitle}</div>



            <div className="ann-small-text">

                {props.ann.type === 'meeting' ? <i className="far fa-calendar-alt mrg-r-10 ann-icon"></i> : null}
                {props.ann.type === 'birthday' ? <i className="fas fa-birthday-cake mrg-r-10 ann-icon2"></i> : null}

                {day.getDate()} {timeService.numToMonth(day.getMonth() + 1)}, {day.getFullYear()}
            </div>
            <div className="divider"></div>
            <p></p>
        </div>

    )
}
