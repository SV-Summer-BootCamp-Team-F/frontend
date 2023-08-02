import React, { useRef, useEffect } from "react";
import { forceSimulation, forceLink, forceManyBody, forceCenter } from "d3-force";
import { select } from "d3-selection";
import { ChartContentPropsType } from "../../types/types";

const ChartContent: React.FC<ChartContentPropsType> = ({ data, width, height }) => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = select(ref.current);

    const simulation = forceSimulation(data.nodes)
      .force(
        "link",
        forceLink(data.links).id((d: any) => d.friend_uid)
      )
      .force("charge", forceManyBody().strength(-600))
      .force("center", forceCenter(width / 2, height / 2));

    // 먼저 link를 그립니다.
    const link = svg
      .selectAll("line")
      .data(data.links)
      .join("line")
      .attr("stroke", "black")
      .attr("stroke-width", 2);

    // 그 다음에 node를 그립니다.
    const node = svg
      .selectAll("g") // <g> 요소를 사용하여 이미지와 동그라미를 묶습니다.
      .data(data.nodes)
      .join("g")
      .attr("transform", (d: any) => `translate(${d.x}, ${d.y})`) // 노드 위치를 설정합니다.
      .call((node: any) => node.append("title").text((d: any) => d.user_uid));

    // 동그라미 노드를 그립니다.
    node
      .append("circle")
      .attr("r", 20) // 원의 반지름 크기를 20으로 설정합니다.
      .attr("fill", "lightblue"); // 원의 채움 색상을 지정합니다.

    // user_photo 이미지를 그립니다.
    node
      .append("image")
      .attr("href", (d: any) => d.user_photo)
      .attr("x", -20) // 이미지를 동그라미의 중심에 배치하려면 x와 y 값을 조정합니다.
      .attr("y", -20) // 이미지를 동그라미의 중심에 배치하려면 x와 y 값을 조정합니다.
      .attr("width", 40)
      .attr("height", 40)
      .attr("clip-path", "url(#clipObj)"); // 이미지를 clip하는 clipPath를 적용합니다.

    svg
      .append("defs")
      .selectAll("clipPath")
      .data(data.nodes)
      .join("clipPath")
      .attr("id", "clipObj")
      .append("circle")
      .attr("r", 20); // 원의 반지름 크기를 설정합니다.

    const label = svg
      .selectAll(".label")
      .data(data.nodes)
      .join("text")
      .attr("class", "label")
      .style("text-anchor", "middle")
      .style("fill", "#555")
      .style("font-family", "Arial")
      .style("font-size", 12)
      .text((d: any) => d.card_name);

    // Show relation_name above each link
    const linkLabels = svg
      .selectAll(".link-label")
      .data(data.links)
      .join("text")
      .attr("class", "link-label")
      .style("text-anchor", "middle")
      .style("fill", "black")
      .style("font-family", "Arial")
      .style("font-size", 10)
      .text((d: any) => d.target.relation_name);

    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      // 노드와 이미지의 위치를 설정합니다.
      node.attr("transform", (d: any) => `translate(${d.x}, ${d.y})`);

      // 레이블 위치를 설정합니다.
      label.attr("x", (d: any) => d.x).attr("y", (d: any) => d.y + 4); // labels' y position is adjusted to situate labels in the middle of nodes

      linkLabels
        .attr("x", (d: any) => (d.source.x + d.target.x) / 2)
        .attr("y", (d: any) => (d.source.y + d.target.y) / 2 - 10);
    });
  }, [data, width, height]);

  return <svg ref={ref} style={{ width, height }} viewBox={`0 0 ${width} ${height}`} />;
};

export default ChartContent;
