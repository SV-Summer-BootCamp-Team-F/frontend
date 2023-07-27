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
      text: "Number of Users Trend on our site",
      align: "center",
    },
    // subtitle: {
    //   text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
    //   align: "left",
    // },
    yAxis: {
      title: {
        text: "Number of Users Trend on our site",
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
        name: "User",
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
    chart: {
      type: "line", // Specify the chart type (you can change this to other types if needed)
      width: 800, // Set the width of the chart
      height: 500, // Set the height of the chart
    },
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
export default IntroLineChart;
