import { ChartContentPropsType } from "../../types/types";

// ChartContent는 width, height, data를 props로 받아 차트의 내용을 그려주는 컴포넌트입니다.
const ChartContent: React.FC<ChartContentPropsType> = ({ width, height, data }) => {
  // translate를 통해 차트의 중심을 SVG의 중심으로 이동합니다.
  return (
    <g transform={`translate(${width / 2}, ${height / 2})`}>
      {/* 
        data 배열을 맵핑하여 각 데이터 포인트를 원으로 표현합니다.
        각 원의 중심점은 (x, y)이며, 반지름은 5, 색깔은 skyblue입니다.
      */}
      {data.map(({ x, y }, i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={5} fill="skyblue" />
        </g>
      ))}
    </g>
  );
};

export default ChartContent;
