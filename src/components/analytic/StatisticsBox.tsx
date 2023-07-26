import React from "react";

type StatisticsBoxProps = {
  color: string;
  title: string;
  number: number;
};

const StatisticsBox: React.FC<StatisticsBoxProps> = ({ color, title, number }) => {
  return (
    <div
      className={`p-4 flex flex-col items-center justify-around w-[150px] h-[150px] bg-${color} rounded-3xl mr-[20px]`}
    >
      <div className="text-gray-600 text-center text-[13px] flex justify-center items-center font-semibold">
        {title}
      </div>
      <div className="text-gray-800 text-[25px] flex justify-center items-center font-semibold">
        {number}
      </div>
    </div>
  );
};

export default StatisticsBox;
