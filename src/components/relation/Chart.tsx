import { useState, useEffect } from "react";
import { RelationType } from "../../types/types";
import ChartContent from "./ChartContent";
import ZoomableSVG from "./ZoomableSVG";
import { fetchRelations } from "../../utils/fetchRelations";

const Chart: React.FC = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // 초기 상태를 빈 객체로 설정
  const [localData, setLocalData] = useState<RelationType | null>(null);

  const updateData = () => {
    fetchRelations().then((fetchedData) => setLocalData(fetchedData));
  };

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    fetchRelations().then((fetchedData) => setLocalData(fetchedData));

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // localData가 null인 경우 아무것도 렌더링하지 않음
  if (!localData) {
    return null;
  }

  return (
    <ZoomableSVG width={dimensions.width} height={dimensions.height} updateData={updateData}>
      <ChartContent data={localData} width={dimensions.width} height={dimensions.height} />
    </ZoomableSVG>
  );
};

export default Chart;
