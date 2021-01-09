import React, { useEffect } from "react"

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import { connect } from 'react-redux';

const _TotalPillar = (props) => {

    useEffect(() => {
        let chart = am4core.create("chartdiv", am4charts.PieChart);
        chart.data = [{
            "month": "Jan",
            "hours": props.h1[0]
        }, {
            "month": "Fab",
            "hours": props.h2[0]
        }, {
            "month": "March",
            "hours": props.h3[0]
        }];
        let pieSeries = chart.series.push(new am4charts.PieSeries());

        pieSeries.dataFields.value = "hours";
        pieSeries.dataFields.category = "month";
    }, []);


    return (
        <div>
            <div id="chartdiv" style={{ width: "100%", height: "40%" }}></div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.user.loggedInUser,
    };
};

const mapDispatchToProps = {

};

export const TotalPillar = connect(mapStateToProps, mapDispatchToProps)(_TotalPillar);