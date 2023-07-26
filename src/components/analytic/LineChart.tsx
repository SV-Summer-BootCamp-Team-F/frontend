import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import HC_more from "highcharts/highcharts-more";
import HC_exporting from "highcharts/modules/exporting";

HC_more(Highcharts);
HC_exporting(Highcharts);

const LineChart: React.FC = () => {
  const options: Highcharts.Options = {
    colors: ["#7CC7E8", "#01579B"],
    chart: {
      type: "line",
      borderRadius: 12,
      width: 660,
      height: 430,
      backgroundColor: "rgb(255, 255, 255, 0.8)",
    },
    exporting: {
      enabled: false,
    },
    title: { text: "Monthly Statistics" },
    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yAxis: {
      title: {
        text: "Temperature (°C)",
      },
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
        },
        enableMouseTracking: false,
      },
    },
    series: [
      {
        type: "line",
        name: "Reggane",
        data: [16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2, 22.0, 17.8],
      },
      {
        type: "line",
        name: "Tallinn",
        data: [-5, -3.6, -0.6, 4.8, 10.2, 14.5, 17.6, 16.5, 12.0, 6.5, 2.0, -0.9],
      },
    ],
  };

  return (
    <div className="rounded-xl w-[660px] h-[430px] bg-rgb(250, 250, 255, 1) shadow-md">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default LineChart;
