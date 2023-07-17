import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import HC_more from "highcharts/highcharts-more";
import HC_exporting from "highcharts/modules/exporting";
import HC_styled from "highcharts/css/highcharts.css";

HC_more(Highcharts);
HC_exporting(Highcharts);

const PieChart = () => {
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
      styledMode: false, // styledMode 활성화
      borderRadius: 30,
      shadow: true,
    },
    title: {
      text: "Browser market shares in May, 2020",
      align: "center",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        name: "Brands",
        colorByPoint: true,
        data: [
          {
            name: "Chrome",
            y: 70.67,
            sliced: true,
            selected: true,
          },
          {
            name: "Edge",
            y: 14.77,
          },
          {
            name: "Firefox",
            y: 4.86,
          },
          {
            name: "Safari",
            y: 2.63,
          },
          {
            name: "Internet Explorer",
            y: 1.53,
          },
          {
            name: "Opera",
            y: 1.4,
          },
          {
            name: "Sogou Explorer",
            y: 0.84,
          },
          {
            name: "QQ",
            y: 0.51,
          },
          {
            name: "Other",
            y: 2.6,
          },
        ],
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default PieChart;
