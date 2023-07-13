export type DataPointType = {
  x: number;
  y: number;
};

export type ZoomableSVGPropsType = {
  children: React.ReactNode;
  width: number;
  height: number;
  updateData: () => void;
};

export type ChartContentPropsType = {
  width: number;
  height: number;
  data: DataPointType[];
};

export type ChartPropsType = {
  data: DataPointType[];
  n: number;
  maxR: number;
};
