import React from 'react'

export const AnnStrip = (props) => {
    return (
        <a href={props.ann.link} target="_blank">

            <div className="cbl2">
                <div className="pillar-sub-head">{props.ann.title}</div>
                <div className="pillar-sub-head">{props.ann.subTitle}</div>
                <div className="pillar-sub-head">{props.ann.date}</div>
                <p></p>
            </div>
        </a>
    )
}
