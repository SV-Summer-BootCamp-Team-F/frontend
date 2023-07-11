import { useState } from "react";

type PositionType = {
  x: number;
  y: number;
};

type DraggableContainerPropsType = {
  children: React.ReactNode;
};

export const DraggableContainer: React.FC<DraggableContainerPropsType> = ({ children }) => {
  const [position, setPosition] = useState<PositionType>({ x: 0, y: 0 });
  const [dragging, setDragging] = useState<boolean>(false);
  const [rel, setRel] = useState<PositionType | null>(null);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    setRel({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
    e.stopPropagation();
    e.preventDefault();
  };

  const onMouseUp = () => {
    setDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - (rel ? rel.x : 0),
      y: e.clientY - (rel ? rel.y : 0),
    });
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div
      className="cursor-move"
      style={{ position: "absolute", top: position.y, left: position.x }}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {children}
    </div>
  );
};
