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
    credits: {
      enabled: false,
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
        text: "Count",
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
        name: "Added business card count",
        data: [16.0, 18, 16, 20, 18, 25, 30, 23, 34, 25, 27, 20],
      },
      {
        type: "line",
        name: "Users who added my card",
        data: [0, 5, 7, 4, 10, 14, 19, 16, 15, 20, 21, 23],
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
