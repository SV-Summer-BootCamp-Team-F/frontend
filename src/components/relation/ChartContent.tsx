import React, { useRef, useEffect } from "react";
import { forceSimulation, forceLink, forceManyBody, forceCenter } from "d3-force";
import { select } from "d3-selection";
import { ChartContentPropsType } from "../../types/types";

const ChartContent: React.FC<ChartContentPropsType> = ({ data, width, height, onNodeClick }) => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = select(ref.current);

    const user_uuid = localStorage.getItem("user_uuid");

    // Add the filter for the drop shadow effect
    svg
      .append("defs")
      .append("mask")
      .append("circle")
      .append("filter")
      .attr("id", "drop-shadow")
      .append("feGaussianBlur")
      .attr("dx", 0)
      .attr("dy", 0)
      .attr("stdDeviation", 1) // Adjust this value to control the blurriness of the shadow
      .attr("flood-color", "yellow"); // Set the color of the drop shadow to yellow

    const simulation = forceSimulation(data.nodes)
      .force(
        "link",
        forceLink(data.links)
          .id((d: any) => d.friend_uid)
          .distance(85)
      )
      .force("charge", forceManyBody().strength(-600))
      .force("center", forceCenter(width / 2, height / 2));

    svg
      .append("defs")
      .selectAll("clipPath")
      .data(data.nodes)
      .join("clipPath")
      .attr("id", "clipObj")
      .append("circle")
      .attr("r", 8); // Adjust this to the desired radius

    const link = svg
      .selectAll("line")
      .data(data.links)
      .join("line")
      .attr("stroke", "white")
      .attr("stroke-opacity", 0.2)
      .attr("stroke-width", 1);

    const linkLabels = svg
      .selectAll(".link-label")
      .data(data.links)
      .join("text")
      .attr("class", "link-label")
      .style("text-anchor", "middle")
      .style("fill", "white")
      .style("font-family", "Arial")
      .style("font-size", 5)
      .text((d: any) => d.target.relation_name);

    const node = svg
      .selectAll("g")
      .data(data.nodes)
      .join("g")
      .attr("transform", (d: any) => `translate(${d.x}, ${d.y})`)
      .on("click", (d: any) => {
        onNodeClick(d);
      })
      .on("mouseover", function () {
        select(this).style("cursor", "pointer"); // Change the cursor to the pointer on mouseover
      })
      .on("mouseout", function () {
        select(this).style("cursor", "default"); // Reset the cursor to default on mouseout
      });

    node
      .append("circle")
      .attr("r", (d: any) => (d.friend_uid === user_uuid ? 10 : 8.5)) // user_uuid와 friend_uid가 같을 때 원의 반경을 12로 설정, 그렇지 않으면 기존대로 8.5로 설정
      .attr("fill", "lightyellow")
      .attr("opacity", 0.8)
      .attr("filter", "url(#drop-shadow)")
      .on("click", (d: any) => {
        onNodeClick(d);
      })
      .on("mouseover", function () {
        select(this).style("cursor", "pointer");
      })
      .on("mouseout", function () {
        select(this).style("cursor", "default");
      });

    node
      .append("image")
      .attr("href", (d: any) => d.user_photo)
      .attr("x", (d: any) => (d.friend_uid === user_uuid ? -12 : -8)) // image's centering adjustment also needs to match with the circle's radius
      .attr("y", (d: any) => (d.friend_uid === user_uuid ? -12 : -8)) // image's centering adjustment also needs to match with the circle's radius
      .attr("width", (d: any) => (d.friend_uid === user_uuid ? 24 : 16)) // Adjust the size of the image if the user_uuid matches with the friend_uid
      .attr("height", (d: any) => (d.friend_uid === user_uuid ? 24 : 16)) // Adjust the size of the image if the user_uuid matches with the friend_uid
      .attr("clip-path", "url(#clipObj)");

    node.append("circle").attr("r", 8).attr("fill", "black").attr("opacity", 0.4);

    const label = svg
      .selectAll(".label")
      .data(data.nodes)
      .join("text")
      .attr("class", "label")
      .style("text-anchor", "middle")
      .style("fill", "white")
      .style("font-family", "Sans-Serif")
      .style("font-size", 7)
      .text((d: any) => d.card_name)
      .on("click", (d: any) => {
        onNodeClick(d);
      })
      .on("mouseover", function () {
        select(this).style("cursor", "pointer"); // Change the cursor to the pointer on mouseover
      })
      .on("mouseout", function () {
        select(this).style("cursor", "default"); // Reset the cursor to default on mouseout
      });

    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      node.attr("transform", (d: any) => `translate(${d.x}, ${d.y})`);

      label.attr("x", (d: any) => d.x + 0.3).attr("y", (d: any) => d.y + 3);

      linkLabels
        .attr("x", (d: any) => (d.source.x + d.target.x) / 2)
        .attr("y", (d: any) => (d.source.y + d.target.y) / 2);
    });
  }, [data, width, height, onNodeClick]);

  return (
    <>
      <svg ref={ref} style={{ width, height }} viewBox={`0 0 ${width} ${height}`} />
    </>
  );
};

export default ChartContent;
