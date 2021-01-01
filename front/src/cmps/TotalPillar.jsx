import React, { useEffect } from "react"

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import { updateUser } from '../store/actions/userActions';
import { connect } from 'react-redux';
import { userService } from '../services/userService';

const _TotalPillar = (props) => {
    let { loggedInUser } = props;
    let currentTime = new Date()
    const currYear = currentTime.getFullYear();
    const currMonth = currentTime.getMonth() + 1;
    const today = currentTime.getDate();

    useEffect(() => {

        let chart = am4core.create("chartdiv", am4charts.PieChart);
        chart.data = [{
            "month": "Jan",
            "hours": 50
        }, {
            "month": "Fab",
            "hours": 40
        }, {
            "month": "March",
            "hours": 30
        }];
        let pieSeries = chart.series.push(new am4charts.PieSeries());

        pieSeries.dataFields.value = "hours";
        pieSeries.dataFields.category = "month";
    }, []);


    const doInOut = async ev => {
        loggedInUser.hours[currYear][currMonth][today].push(Math.round(Date.now() / 1000));
        props.updateUser(loggedInUser);
        sessionStorage.setItem('user', JSON.stringify(loggedInUser))
        props.doRefresh();
    }

    return (
        <div>
            <div id="chartdiv" style={{ width: "90%", height: "100%" }}></div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.user.loggedInUser,
    };
};

const mapDispatchToProps = {
    updateUser
};

export const TotalPillar = connect(mapStateToProps, mapDispatchToProps)(_TotalPillar);