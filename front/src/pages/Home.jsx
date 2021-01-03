import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { showPopup, setPageName } from "../store/actions/userActions";

import { PopUpWelcome } from '../cmps/pop_up_welcome';

const _Home = (props) => {
    useEffect(() => {
        props.setPageName('Welcome!');
    }, []);


    return (
        <div className="relative">
            {(props.popup ? <PopUpWelcome toggle={() => props.showPopup(false)} /> : null)}
            <p>Clock-In is an open source employee-management system</p>

            <div className="articles-row">
                <div className="article_a"></div>
                <div className="article_b"></div>
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