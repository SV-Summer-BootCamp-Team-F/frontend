import { ChartContentPropsType } from "../../types/types";

const ChartContent: React.FC<ChartContentPropsType> = ({ width, height, data }) => {
  return (
    <g transform={`translate(${width / 2}, ${height / 2})`}>
      {data.map(({ x, y }, i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={5} fill="skyblue" />
        </g>
      ))}
    </g>
  );
};

export default ChartContent;
