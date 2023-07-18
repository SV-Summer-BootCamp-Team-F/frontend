import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import HC_more from "highcharts/highcharts-more";
import HC_exporting from "highcharts/modules/exporting";
import HC_styled from "highcharts/css/highcharts.css";

HC_more(Highcharts);
HC_exporting(Highcharts);

const BarChart = () => {
  const options = {
    chart: {
      type: "column",
      width: 250,
      height: 350,
      borderRadius: 24,
    },
    title: {
      text: "Corn vs wheat estimated production for 2020",
      align: "left",
    },
    subtitle: {
      text:
        'Source: <a target="_blank" ' +
        'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>',
      align: "left",
    },
    xAxis: {
      categories: ["USA", "China", "Brazil", "EU", "India", "Russia"],
      crosshair: true,
      accessibility: {
        description: "Countries",
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "1000 metric tons (MT)",
      },
    },
    tooltip: {
      valueSuffix: " (1000 MT)",
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Corn",
        data: [406292, 260000, 107000, 68300, 27500, 14500],
      },
      {
        name: "Wheat",
        data: [51086, 136000, 5500, 141000, 107180, 77000],
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default BarChart;
