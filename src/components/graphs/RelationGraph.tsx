import d3, { D3ZoomEvent, select, zoom } from "d3";
import React, { useEffect, useRef, useState } from "react";

type DataPointType = {
  x: number;
  y: number;
};

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

type ZoomableSVGPropsType = {
  children: React.ReactNode;
  width: number;
  height: number;
};

const ZoomableSVG: React.FC<ZoomableSVGPropsType> = ({ children, width, height }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [k, setK] = useState<number>(1);
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  useEffect(() => {
    const zoomHandler = zoom<SVGSVGElement, unknown>().on(
      "zoom",
      (event: D3ZoomEvent<SVGSVGElement, unknown>) => {
        const { x, y, k } = event.transform;
        setX(x);
        setY(y);
        setK(k);
      }
    );
    if (svgRef.current) {
      select(svgRef.current).call(zoomHandler);
    }
  }, []);

  return (
    <svg ref={svgRef} width={width} height={height}>
      <g transform={`translate(${x}, ${y}) scale(${k})`}>{children}</g>
      <text x="10" y="10" fill="black">
        Hello World
      </text>
    </svg>
  );
};

type ChartContentPropsType = {
  width: number;
  height: number;
  data: DataPointType[];
};

const ChartContent: React.FC<ChartContentPropsType> = ({ width, height, data }) => {
  return (
    <g transform={`translate(${width / 2}, ${height / 2})`}>
      {data.map(({ x, y }, i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={5} fill="skyblue" />
        </g>
      ))}
    </g>
  );
};

type ChartPropsType = {
  data: DataPointType[];
};

const Chart: React.FC<ChartPropsType> = ({ data }) => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

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
    <ZoomableSVG width={dimensions.width} height={dimensions.height}>
      <ChartContent width={dimensions.width} height={dimensions.height} data={data} />
    </ZoomableSVG>
  );
};

const RelationGraph: React.FC = () => {
  const n = 100;
  const maxR = 100;
  const [data, setData] = useState<DataPointType[]>(generateDataPoints(n, maxR));

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen min-w-full border-black">
        <Chart data={data} />
      </div>
      <div>
        <button onClick={() => setData(generateDataPoints(n, maxR))}>update</button>
      </div>
    </div>
  );
};

export default RelationGraph;
