import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HC_more from "highcharts/highcharts-more";
import HC_exporting from "highcharts/modules/exporting";


HC_more(Highcharts);
HC_exporting(Highcharts);

const PieChart = () => {
  const options = {
    colors: [
      "#E1F5FE",
      "#03A9F4",
      "#81D4FA",
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
      plotShadow: true,
      type: "pie",

      width: 350,
      height: 350,
      borderRadius: 12,
      backgroundColor: "rgb(255, 255, 255, 0.8)",
    },
    exporting: {
      enabled: false, // 내보내기 버튼 활성화 여부
    },
    title: {
      text: "Browser market shares, 2022",
      align: "left",
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
    <div className="rounded-lg w-[350px] h-[350px] bg-rgb(255, 255, 255, 1) shadow-md rounded-xl">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default PieChart;
