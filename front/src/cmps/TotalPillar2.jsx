import React, { useEffect } from 'react'
/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { timeService } from '../services/timeService';

export const TotalPillar2 = (props) => {

    

    useEffect(() => {
        am4core.useTheme(am4themes_animated);


        let chart = am4core.create("chartdiv2", am4charts.XYChart);
        chart.padding(10, 40, 20, 0);

        let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.dataFields.category = "month_name";
        categoryAxis.renderer.minGridDistance = 1;
        categoryAxis.renderer.inversed = true;
        categoryAxis.renderer.grid.template.disabled = true;

        let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;

        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.categoryY = "month_name";
        series.dataFields.valueX = "MAU";
        series.tooltipText = "{valueX.value}"
        series.columns.template.strokeOpacity = 0;
        series.columns.template.column.cornerRadiusBottomRight = 0;
        series.columns.template.column.cornerRadiusTopRight = 0;

        let labelBullet = series.bullets.push(new am4charts.LabelBullet())
        labelBullet.label.horizontalCenter = "left";
        labelBullet.label.dx = 10;
        labelBullet.label.text = "{values.valueX.workingValue.formatNumber('#.')}";
        labelBullet.locationX = 1;

        chart.colors.list = [
            am4core.color("#5c46f9"),
            am4core.color("#ff4c61"),
            am4core.color("#ffad4a")
        ];
        

        series.columns.template.adapter.add("fill", function (fill, target) {
            return chart.colors.getIndex(target.dataItem.index);
        });

        categoryAxis.sortBySeries = series;
        chart.data = [
            {
                "month_name": timeService.numToMonth(props.last3Months[0][1]),
                "MAU": props.h1[0],
            },
            {
                "month_name": timeService.numToMonth(props.last3Months[1][1]),
                "MAU": props.h2[0],

            },
            {
                "month_name": timeService.numToMonth(props.last3Months[2][1]),
                "MAU": props.h3[0],

            }
        ]

        

    }, []);


    return (
        <div>
            <div className="pillar-head">{props.monthTotalHours}:{props.monthTotalMinutes}</div>
            <div id="chartdiv2" style={{ width: "320px", height: "150px" }}></div>
        </div>
    )
};