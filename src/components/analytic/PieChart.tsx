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
    colors: [
      "#81D4FA",
      "#03A9F4",
      "#E1F5FE",
      "#01579B",
      "#B3E5FC",
      "#29B6F6",
      "#4FC3F7",
      "#039BE5",
      "#0288D1",
    ],
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
      width: 350,
      height: 330,
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
      text: "Statistics by relationship category",
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
    <div className="rounded-lg w-[350px] h-[330px] bg-rgb(255, 255, 255, 1) shadow-md rounded-xl">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default PieChart;
