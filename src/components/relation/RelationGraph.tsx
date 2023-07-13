import React, { useState } from "react";
import { DataPointType } from "../../types/types";
import generateDataPoints from "../../utils/generateDataPoints";
import Chart from "./Chart";

const RelationGraph: React.FC = () => {
  const n = 100;
  const maxR = 100;
  const [data, setData] = useState<DataPointType[]>(generateDataPoints(n, maxR));

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen min-w-full border-black">
        <Chart data={data} n={n} maxR={maxR} />
      </div>
    </div>
  );
};

export default RelationGraph;
