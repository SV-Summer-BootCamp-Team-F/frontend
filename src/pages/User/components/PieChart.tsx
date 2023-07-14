import React, { useEffect } from "react";

const PieChart = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://code.highcharts.com/highcharts.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const chartOptions = {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie",
          styledMode: false, // styledMode 활성화
          borderRadius: 30,
          shadow: true,
        },
        title: {
          text: "Browser market shares in May, 2020",
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
              enabled: true,
              format: "<b>{point.name}</b>: {point.percentage:.1f} %",
            },
          },
        },
        series: [
          {
            name: "Brands",
            colorByPoint: true,
            data: [
              {
                name: "Chrome",
                y: 70.67,
                sliced: true,
                selected: true,
              },
              {
                name: "Edge",
                y: 14.77,
              },
              {
                name: "Firefox",
                y: 4.86,
              },
              {
                name: "Safari",
                y: 2.63,
              },
              {
                name: "Internet Explorer",
                y: 1.53,
              },
              {
                name: "Opera",
                y: 1.4,
              },
              {
                name: "Sogou Explorer",
                y: 0.84,
              },
              {
                name: "QQ",
                y: 0.51,
              },
              {
                name: "Other",
                y: 2.6,
              },
            ],
          },
        ],
      };

      Highcharts.chart("browserMarketShareChartContainer", chartOptions);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="browserMarketShareChartContainer" />;
};

export default PieChart;
