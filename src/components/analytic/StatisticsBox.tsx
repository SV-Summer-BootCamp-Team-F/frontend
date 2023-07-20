import React from "react";

type StatisticsBoxPropsType = {
  color: string;
  title: string;
  number: number;
};

const StatisticsBox: React.FC<StatisticsBoxPropsType> = ({ color, title, number }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-[150px] bg-${color} rounded-3xl mr-10`}
    >
      <h3 className="text-4xl font-semibold">{title}</h3>
      <h4>{number}</h4>
    </div>
  );
};

export default StatisticsBox;
