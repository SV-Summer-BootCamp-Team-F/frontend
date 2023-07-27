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
    colors: ["#7CC7E8", "#01579B"],
    chart: {
      type: "column",
      width: 350,
      height: 250,
      borderRadius: 12,
      backgroundColor: "rgb(255, 255, 255, 0.8)",
    },
    credits: {
      enabled: false,
    },
    exporting: {
      enabled: false, // 내보내기 버튼 활성화 여부
    },
    title: {
      text: "Corn vs wheat production 2020",
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
    <div className="rounded-lg w-[350px] h-[250px] bg-rgb(255, 255, 255, 1) shadow-md rounded-xl">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default BarChart;
