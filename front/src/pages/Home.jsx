import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import { setPageName } from "../store/actions/userActions";

import { PopUpWelcome } from '../cmps/pop_up_welcome';

const _Home = (props) => {
    const [pop, setPop] = useState(true);

    useEffect(() => {
        props.setPageName('Home');
    }, []);

    return (
        <div className="relative">
            {(pop ? <PopUpWelcome toggle={() => setPop(!pop)} /> : null)}
            <p>Clock-In is an open source employee-management system</p>
        </div>
    )
}

const mapDispatchToProps = {
    setPageName
};

export const Home = connect(null, mapDispatchToProps)(_Home);