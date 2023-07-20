import React from "react";

type StatisticsBoxProps = {
  color: string;
  title: string;
  number: number;
};

const StatisticsBox: React.FC<StatisticsBoxProps> = ({ color, title, number }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-[150px] h-[150px] bg-${color} rounded-3xl mr-[20px]`}
    >
      <div className="text-[20px] flex justify-center items-center font-bold">{title}</div>
      <div className="text-[20px] flex justify-center items-center font-semibold">{number}</div>
    </div>
  );
};

export default StatisticsBox;
