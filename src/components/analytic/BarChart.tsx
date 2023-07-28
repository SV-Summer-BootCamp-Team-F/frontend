import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HC_more from "highcharts/highcharts-more";
import HC_exporting from "highcharts/modules/exporting";


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
      text: "Daily Statistics",
      align: "center",
    },
    xAxis: {
      categories: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      crosshair: true,
      accessibility: {
        description: "Countries",
      },
    },
    yAxis: {
      min: 0,
      max: 40,
      title: {
        text: "Counts",
      },
    },
    tooltip: {
      valueSuffix: " (1000 MT)",
    },
    plotOptions: {
      column: {
        pointPadding: 0.1,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Added business card count",
        data: [7, 12, 5, 8, 20, 15],
      },
      {
        name: "Users who added my card",
        data: [10, 20, 17, 6, 20, 15],
      },
    ],
  };

  return (
    <div className="rounded-lg w-[350px] h-[250px] bg-rgb(255, 255, 255, 1) shadow-md ">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default BarChart;
