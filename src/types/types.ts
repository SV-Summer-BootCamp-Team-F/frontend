// 각 데이터 포인트를 나타내는 타입입니다. x와 y 좌표를 가집니다.
export type DataPointType = {
  x: number;
  y: number;
};

// ZoomableSVG 컴포넌트의 속성 타입입니다. SVG의 가로, 세로 크기,
// 업데이트 함수, 그리고 자식 요소들을 props로 받습니다.
export type ZoomableSVGPropsType = {
  children: React.ReactNode; // SVG 내부에 렌더링 될 요소들
  width: number; // SVG의 가로 크기
  height: number; // SVG의 세로 크기
  updateData: () => void; // 데이터를 업데이트하는 함수
};

// ChartContent 컴포넌트의 속성 타입입니다. Chart의 가로, 세로 크기,
// 그리고 데이터를 props로 받습니다.
export type ChartContentPropsType = {
  width: number; // Chart의 가로 크기
  height: number; // Chart의 세로 크기
  data: DataPointType[]; // 데이터 포인트들의 배열
};

// Chart 컴포넌트의 속성 타입입니다. 데이터, n(생성할 데이터 포인트의 수),
// maxR(데이터 포인트 생성에 사용되는 최대 반지름)를 props로 받습니다.
export type ChartPropsType = {
  data: DataPointType[]; // 데이터 포인트들의 배열
  n: number; // 생성할 데이터 포인트의 수
  maxR: number; // 데이터 포인트 생성에 사용되는 최대 반지름
};
