import { zoom, D3ZoomEvent, select } from "d3";
import { useRef, useState, useEffect } from "react";
import { ZoomableSVGPropsType } from "../../types/types";

const ZoomableSVG: React.FC<ZoomableSVGPropsType> = ({ children, width, height, updateData }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [k, setK] = useState<number>(1);
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  const resetZoom = () => {
    setK(1);
    setX(0);
    setY(0);
  };

  useEffect(() => {
    const zoomHandler = zoom<SVGSVGElement, unknown>().on(
      "zoom",
      (event: D3ZoomEvent<SVGSVGElement, unknown>) => {
        const { x, y, k } = event.transform;
        setK(k);
        setX(x);
        setY(y);
      }
    );

    if (svgRef.current) {
      select(svgRef.current).call(zoomHandler);
    }
  }, []);

  return (
    <svg ref={svgRef} width={width} height={height}>
      <g transform={`translate(${x}, ${y}) scale(${k})`}>{children}</g>
      <foreignObject x={10} y={10} width={200} height={200}>
        <button
          onClick={() => {
            updateData();
            resetZoom();
          }}
        >
          Update Data
        </button>
      </foreignObject>
      <text x="10" y="10" fill="black">
        Hello World
      </text>
    </svg>
  );
};

export default ZoomableSVG;
