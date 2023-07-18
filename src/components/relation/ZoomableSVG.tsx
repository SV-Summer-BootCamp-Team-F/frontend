import { zoom, D3ZoomEvent, select } from "d3";
import { useRef, useState, useEffect } from "react";
import { ZoomableSVGPropsType } from "../../types/types";

// ZoomableSVG는 상호작용 가능한 SVG 컴포넌트입니다. 이 컴포넌트는 확대/축소 기능을 제공하며,
// 데이터가 변경되면 확대/축소 상태를 초기화하는 버튼을 포함하고 있습니다.
const ZoomableSVG: React.FC<ZoomableSVGPropsType> = ({ children, width, height, updateData }) => {
  // svgRef는 SVG 요소를 참조하는 데 사용되는 참조입니다.
  const svgRef = useRef<SVGSVGElement | null>(null);

  // k, x, y는 SVG 요소의 확대/축소 및 이동을 위한 상태 변수입니다.
  const [k, setK] = useState<number>(1); // 확대/축소 비율
  const [x, setX] = useState<number>(0); // x 위치
  const [y, setY] = useState<number>(0); // y 위치

  // resetZoom 함수는 확대/축소 상태를 초기화합니다.
  const resetZoom = () => {
    setK(1);
    setX(0);
    setY(0);
  };

  useEffect(() => {
    // zoomHandler는 확대/축소 이벤트를 처리하는 핸들러입니다.
    const zoomHandler = zoom<SVGSVGElement, unknown>().on(
      "zoom",
      (event: D3ZoomEvent<SVGSVGElement, unknown>) => {
        // 이벤트에서 변형 정보를 가져와 상태를 업데이트합니다.
        const { x, y, k } = event.transform;
        setK(k);
        setX(x);
        setY(y);
      }
    );

    // SVG 요소가 준비되면 zoom 핸들러를 이에 적용합니다.
    if (svgRef.current) {
      select(svgRef.current).call(zoomHandler);
    }
  }, []);

  return (
    <svg ref={svgRef} width={width} height={height} className="bg-rememberBlack">
      {/* 
        transform 속성을 이용해, 확대/축소와 이동을 적용합니다. 
        이 때, children은 확대/축소와 이동이 적용되는 SVG 요소들을 나타냅니다.
      */}
      <g transform={`translate(${x}, ${y}) scale(${k})`}>{children}</g>
      {/* 
        foreignObject 요소는 SVG 내에서 HTML 콘텐츠를 포함할 수 있도록 합니다. 
        여기서는 'Update Data' 버튼을 추가하였습니다.
      */}
      <foreignObject x={240} y={40} width={600} height={400}>
        <button
          className="btn btn-primary"
          onClick={() => {
            updateData(); // 버튼 클릭 시 데이터를 업데이트하고
            resetZoom(); // 확대/축소 상태를 초기화합니다.
          }}
        >
          Update Data
        </button>
      </foreignObject>
      {/* 텍스트 요소를 SVG에 추가합니다. */}
      <text x="10" y="10" fill="black">
        Hello World
      </text>
    </svg>
  );
};

export default ZoomableSVG;
