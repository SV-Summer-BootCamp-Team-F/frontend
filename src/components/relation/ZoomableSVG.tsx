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
    const zoomHandler = zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 10])
      .on("zoom", (event: D3ZoomEvent<SVGSVGElement, unknown>) => {
        const { x, y, k } = event.transform;
        setK(k);
        setX(x);
        setY(y);
      });

    if (svgRef.current) {
      select(svgRef.current).call(zoomHandler);
    }
  }, []);

  return (
    <svg ref={svgRef} width={width} height={height}>
      <defs>
        <linearGradient id="gradient" gradientTransform="rotate(70)">
          <stop offset="0%" stopColor="#3F4E74" />
          <stop offset="100%" stopColor={`rgba(0, 0, 0, ${k - 4})`} /> {/* Update the stopColor */}
        </linearGradient>
      </defs>

      <rect x="0" y="0" width={width} height={height} fill="url(#gradient)" />

      <g transform={`translate(${x}, ${y}) scale(${k})`}>{children}</g>
      <foreignObject x={340} y={85} width={600} height={400}>
        <button
          className="btn btn-primary"
          onClick={() => {
            updateData();
            resetZoom();
          }}
        >
          ↺
        </button>
      </foreignObject>
      <text x="6rem" y="7rem" fill="Skyblue" fontWeight={800} fontSize={40}>
        My
      </text>
      <text x="10rem" y="7rem" fill="white" fontWeight={700} fontSize={30}>
        Connection
      </text>
    </svg>
  );
};

export default ZoomableSVG;
