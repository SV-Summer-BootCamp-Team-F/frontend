import { useState, useEffect } from "react";
import { ChartPropsType, DataPointType } from "../../types/types";
import generateDataPoints from "../../utils/generateDataPoints";
import ChartContent from "./ChartContent";
import ZoomableSVG from "./ZoomableSVG";

const Chart: React.FC<ChartPropsType> = ({ data, n, maxR }) => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [localData, setLocalData] = useState<DataPointType[]>(data);

  const updateData = () => {
    setLocalData(generateDataPoints(n, maxR));
  };

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ZoomableSVG width={dimensions.width} height={dimensions.height} updateData={updateData}>
      <ChartContent width={dimensions.width} height={dimensions.height} data={localData} />
    </ZoomableSVG>
  );
};

export default Chart;
