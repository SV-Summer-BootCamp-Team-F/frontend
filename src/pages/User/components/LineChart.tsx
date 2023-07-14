import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import HC_more from "highcharts/highcharts-more";
import HC_exporting from "highcharts/modules/exporting";
import HC_styled from "highcharts/css/highcharts.css";

HC_more(Highcharts);
HC_exporting(Highcharts);

const LineChart = () => {
  const options = {
    title: {
      margin: 50,
      text: "Business card count statistics",
      align: "center",
      style: {
        color: "black",
        fontWeight: "bold",
      },
    },
    yAxis: {
      title: {
        text: "Number of Employees",
      },
    },
    xAxis: {
      accessibility: {
        rangeDescription: "Range: 2010 to 2020",
      },
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 2010,
      },
    },
    chart: {
      styledMode: false, // styledMode 활성화
      borderRadius: 30,
      margin: [100, 100, 100, 100],
      shadow: true,
    },
    series: [
      {
        name: "Installation & Developers",
        data: [43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157, 161454, 154610],
      },
      {
        name: "Manufacturing",
        data: [24916, 37941, 29742, 29851, 32490, 30282, 38121, 36885, 33726, 34243, 31050],
      },
      {
        name: "Sales & Distribution",
        data: [11744, 30000, 16005, 19771, 20185, 24377, 32147, 30912, 29243, 29213, 25663],
      },
      {
        name: "Operations & Maintenance",
        data: [null, null, null, null, null, null, null, null, 11164, 11218, 10077],
      },
      {
        name: "Other",
        data: [21908, 5548, 8105, 11248, 8989, 11816, 18274, 17300, 13053, 11906, 10073],
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default LineChart;
