import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { showPopup, setPageName } from "../store/actions/userActions";
import { AnnStrip } from "../cmps/AnnStrip";
import { PopUpWelcome } from '../cmps/PopUpWelcome';

const _Home = (props) => {
    useEffect(() => {
        props.setPageName('Welcome!');
    });

    return (
        <div className="relative">
            {(props.popup ? <PopUpWelcome toggle={() => props.showPopup(false)} /> : null)}
            <p>Clock-In is an open source employee-management system</p>
            <div className="articles-row">
                <div className="article_a"></div>
                <div className="article_b"></div>
            </div>
            <div className="articles-row">
                <div className="ann_container">
                    <p className="small-text">Announcements</p>
                    <div className="pillar-head">
                        What's happenning?
                        <AnnStrip />
                    </div>
                </div>
                <div className="ann_container"></div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        popup: state.user.popup
        };
};

const mapDispatchToProps = {
    showPopup,
    setPageName
};

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home);