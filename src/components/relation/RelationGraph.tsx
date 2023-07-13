import React, { useState } from "react";
import { DataPointType } from "../../types/types";
import generateDataPoints from "../../utils/generateDataPoints";
import Chart from "./Chart";

// RelationGraph는 상호작용 가능한 차트를 생성하고 보여주는 컴포넌트입니다.
const RelationGraph: React.FC = () => {
  const n = 100; // 데이터 포인트의 수를 정의합니다.
  const maxR = 100; // 데이터 포인트의 최대 반지름을 정의합니다.

  // 초기 데이터를 생성하고, 이를 state로 관리합니다.
  // generateDataPoints는 n개의 무작위 데이터 포인트를 생성하는 함수입니다.
  const [data, setData] = useState<DataPointType[]>(generateDataPoints(n, maxR));

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen min-w-full border-black">
        {/* Chart 컴포넌트는 생성된 데이터를 사용하여 차트를 그리고 상호작용을 처리합니다. */}
        <Chart data={data} n={n} maxR={maxR} />
      </div>
    </div>
  );
};

export default RelationGraph;
