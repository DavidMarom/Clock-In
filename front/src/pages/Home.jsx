import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { showPopup, setPageName } from "../store/actions/userActions";
import { AnnStrip } from "../cmps/AnnStrip";
import { loadAnn } from '../store/actions/annActions';
import { PopUpWelcome } from '../cmps/PopUpWelcome';

export const Home = () => {
    const dispatch = useDispatch();
    const popup = useSelector((state) => state.user.popup);

    useEffect(() => {
        dispatch(setPageName('Welcome!'));
        dispatch(loadAnn());
    }, []);

    const allAnnouncements = useSelector((state) => state.annReducer.ann);

    return (
        <div className="relative">

            {(popup ? <PopUpWelcome toggle={() => dispatch(showPopup(false))} /> : null)}
            <p>Clock-In is a modern employee-management system you can use in your organization. For more information <a href="https://clockin.website/" target="_blank" rel="noopener noreferrer">visit the Clock-In webiste.</a></p>
            <div className="articles-row">
                <div className="article_a"></div>
                <div className="article_b"></div>
            </div>
            <div className="articles-row">
                <div className="ann_container">
                    <p className="small-text">Announcements</p>
                    <div className="pillar-head">What's happenning?</div>

                    {
                        (allAnnouncements ?
                            allAnnouncements.map(
                                (ann, idx) => { return(<AnnStrip key={idx} ann={ann} /> )}
                            )
                            : null
                        )

                    }

                </div>
                <div className="ann_container"></div>
            </div>
        </div>
    )
}