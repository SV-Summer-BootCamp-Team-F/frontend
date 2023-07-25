import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

type IntroChartPropsType = {
  chartData: {
    name: string;
    data: number[] | null[];
  }[];
};

const IntroLineChart: React.FC<IntroChartPropsType> = ({ chartData }) => {
  const options: Highcharts.Options = {
    colors: ["#01579B"],
    title: {
      text: "Number of Subscribers Status",
      align: "center",
    },
    // subtitle: {
    //  text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
    //  align: "left",
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
    series: chartData, // chartData를 바로 할당합니다.
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 700,
            
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
