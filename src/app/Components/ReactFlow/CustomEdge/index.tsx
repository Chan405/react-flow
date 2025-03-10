import React from "react";
import { getBezierPath, EdgeLabelRenderer, BaseEdge } from "@xyflow/react";

import { EdgeProps } from "@xyflow/react";

interface CustomEdgeProps extends EdgeProps {
  id: string;
  data: {
    label: string;
  };
}

const CustomEdge = ({ id, data, ...props }: CustomEdgeProps) => {
  const [edgePath, labelX, labelY] = getBezierPath(props);

  return (
    <>
      <BaseEdge id={id} path={edgePath} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            background: "#ffcc00",
            padding: 10,
            borderRadius: 5,
            fontSize: 12,
            fontWeight: 700,
          }}
          className="nodrag nopan"
        >
          {data.label}
        </div>
      </EdgeLabelRenderer>
    </>
  );
};

export default CustomEdge;
