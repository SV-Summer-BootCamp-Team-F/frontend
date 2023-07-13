import { DataPointType } from "../types/types";

const generateDataPoints = (n: number, maxR: number): DataPointType[] => {
  const dataPoints: DataPointType[] = [];
  for (let i = 0; i < n; i++) {
    const r = Math.random() * maxR;
    const t = Math.random() * 2 * Math.PI;
    dataPoints.push({
      x: r * Math.cos(t),
      y: r * Math.sin(t),
    });
  }
  return dataPoints;
};

export default generateDataPoints;
