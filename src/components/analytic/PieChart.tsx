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
      width: 350,
      height: 350,
      borderRadius: 24,
    },
    title: {
      text: "Browser market shares, 2022",
      align: "left",
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
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: "Brands",
        colorByPoint: true,
        data: [
          {
            name: "Chrome",
            y: 74.77,
            sliced: true,
            selected: true,
          },
          {
            name: "Edge",
            y: 12.82,
          },
          {
            name: "Firefox",
            y: 4.63,
          },
          {
            name: "Safari",
            y: 2.44,
          },
          {
            name: "Internet Explorer",
            y: 2.02,
          },
          {
            name: "Other",
            y: 3.28,
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
