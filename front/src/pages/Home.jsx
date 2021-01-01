import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import { setPageName } from "../store/actions/userActions";

import { PopUpWelcome } from '../cmps/pop_up_welcome';

const _Home = (props) => {
    const [pop, setPop] = useState(true);
    // const [firstLoad, setFirstLoad] = useState(true);

    useEffect(() => {
        props.setPageName('Welcome!');
    }, []);

    return (
        <div className="relative">
            {(pop ? <PopUpWelcome toggle={() => setPop(false)} /> : null)}
            <p>Clock-In is an open source employee-management system</p>

        <div className="articles-row">
            <div className="article_a"></div>
            <div className="article_b"></div>

        </div>

        </div>
    )
}

const mapDispatchToProps = {
    setPageName
};

export const Home = connect(null, mapDispatchToProps)(_Home);