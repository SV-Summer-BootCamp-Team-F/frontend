import React, { useRef, useEffect } from "react";
import { forceSimulation, forceLink, forceManyBody, forceCenter } from "d3-force";
import { select } from "d3-selection";
import { ChartContentPropsType } from "../../types/types";

const ChartContent: React.FC<ChartContentPropsType> = ({ data, width, height }) => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = select(ref.current);
    console.log("ChartContent.tsx");
    console.log(data);
    console.log(data.nodes[0].user_uid);
    console.log(data.links[0].source);
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
      .selectAll("image")
      .data(data.nodes)
      .join("image")
      .attr("href", (d: any) => d.user_photo)
      .attr("width", 40)
      .attr("height", 40)
      .attr("x", (d: any) => d.x - 20)
      .attr("y", (d: any) => d.y - 20)
      .call((node: any) => node.append("title").text((d: any) => d.user_uid));

    const label = svg
      .selectAll(".label")
      .data(data.nodes)
      .join("text")
      .attr("class", "label")
      .style("text-anchor", "middle")
      .style("fill", "#555")
      .style("font-family", "Arial")
      .style("font-size", 12);

    simulation.on("tick", () => {
      simulation.on("tick", () => {
        link
          .attr("x1", (d: any) => d.source.x)
          .attr("y1", (d: any) => d.source.y)
          .attr("x2", (d: any) => d.target.x)
          .attr("y2", (d: any) => d.target.y);

        node.attr("x", (d: any) => d.x - 20).attr("y", (d: any) => d.y - 20);
      });

      label.attr("x", (d: any) => d.x).attr("y", (d: any) => d.y + 4); // labels' y position is adjusted to situate labels in the middle of nodes
    });
  }, [data, width, height]);

  return <svg ref={ref} style={{ width, height }} viewBox={`0 0 ${width} ${height}`} />;
};

export default ChartContent;
