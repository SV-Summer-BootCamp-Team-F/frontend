import React, { useState, useEffect } from "react";
import Chart from "./Chart";
import { fetchRelations } from "../../utils/fetchRelations";
import { RelationType } from "../../types/types";

const RelationGraph: React.FC = () => {
  // Fetch data
  const [data, setData] = useState<RelationType | null>(null);

  useEffect(() => {
    fetchRelations().then((relations) => setData(relations));
  }, []);

  // If data is still loading
  if (!data) {
    return <div>Loading...</div>;
  }

  // Render chart
  return (
    <div className="flex items-center justify-center min-h-screen min-w-full border-black">
      <Chart />
    </div>
  );
};

export default RelationGraph;
