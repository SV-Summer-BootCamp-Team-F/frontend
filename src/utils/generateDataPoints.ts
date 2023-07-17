// types/types에서 DataPointType을 가져옵니다.
import { DataPointType } from "../types/types";

// generateDataPoints는 임의의 데이터 포인트를 생성하는 함수입니다.
const generateDataPoints = (n: number, maxR: number): DataPointType[] => {
  // 데이터 포인트를 저장할 빈 배열을 생성합니다.
  const dataPoints: DataPointType[] = [];

  // n 개의 데이터 포인트를 생성합니다.
  for (let i = 0; i < n; i++) {
    // 반지름 r은 0부터 maxR 사이의 임의의 값입니다.
    const r = Math.random() * maxR;
    // 각도 t는 0부터 2π 사이의 임의의 값입니다.
    const t = Math.random() * 2 * Math.PI;

    // (r cos(t), r sin(t)) 형태의 임의의 점을 생성하여 배열에 추가합니다.
    // 이는 극 좌표 (r, t)를 직교 좌표 (x, y)로 변환하는 과정입니다.
    dataPoints.push({
      x: r * Math.cos(t),
      y: r * Math.sin(t),
    });
  }

  // 생성된 데이터 포인트 배열을 반환합니다.
  return dataPoints;
};

// generateDataPoints 함수를 내보냅니다.
// 이를 통해 다른 파일에서 이 함수를 import하여 사용할 수 있습니다.
export default generateDataPoints;
