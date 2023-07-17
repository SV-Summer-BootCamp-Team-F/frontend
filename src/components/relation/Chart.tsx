import { useState, useEffect } from "react";
import { ChartPropsType, DataPointType } from "../../types/types";
import generateDataPoints from "../../utils/generateDataPoints";
import ChartContent from "./ChartContent";
import ZoomableSVG from "./ZoomableSVG";

const Chart: React.FC<ChartPropsType> = ({ data, n, maxR }) => {
  // 차트의 크기를 위한 상태 설정 (창의 넓이와 높이)
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // 로컬 데이터를 위한 상태 설정
  const [localData, setLocalData] = useState<DataPointType[]>(data);

  // 데이터를 업데이트하는 함수
  const updateData = () => {
    setLocalData(generateDataPoints(n, maxR));
  };

  useEffect(() => {
    // 창 크기가 변경될 때 차트의 크기를 업데이트하는 함수
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // 창 크기가 변경될 때마다 이벤트 리스너 호출
    window.addEventListener("resize", handleResize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거 (메모리 누수 방지)
    return () => window.removeEventListener("resize", handleResize);
  }, []); // 빈 의존성 배열을 사용하여 마운트시에만 이벤트 리스너를 설정

  return (
    // 차트를 그리는 SVG와 그 내용을 ZoomableSVG 컴포넌트와 ChartContent 컴포넌트로 분리
    <ZoomableSVG width={dimensions.width} height={dimensions.height} updateData={updateData}>
      <ChartContent width={dimensions.width} height={dimensions.height} data={localData} />
    </ZoomableSVG>
  );
};

export default Chart;