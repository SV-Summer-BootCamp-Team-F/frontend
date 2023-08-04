import React from "react";

interface StarProps {
  x: number;
  y: number;
  radius: number;
}

const Star: React.FC<StarProps> = ({ x, y, radius }) => {
  return (
    <circle className="star" cx={x} cy={y} r={radius} fill="#fff" stroke="none" strokeWidth="0" />
  );
};

export default Star;
