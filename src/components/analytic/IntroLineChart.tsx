import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

type ChartDataItemType = {
  name: string;
  data: (number | null)[];
};

type IntroChartPropsType = {
  chartData: ChartDataItemType[];
};

const IntroLineChart: React.FC<IntroChartPropsType> = ({ chartData }) => {
  const options: Highcharts.Options = {
    colors: ["#01579B"],
    title: {
      text: "Number of Subscribers Status",
      align: "center",
    },
    // subtitle: {
    //   text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
    //   align: "left",
    // },
    yAxis: {
      title: {
        text: "Number of Subscriber",
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
    series: [
      {
        type: "line",
        name: "Subscriber",
        data: chartData[0].data,
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

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default IntroLineChart;
