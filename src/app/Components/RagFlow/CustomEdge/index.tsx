import React, { type FC } from "react";
import {
  getBezierPath,
  EdgeLabelRenderer,
  BaseEdge,
  type EdgeProps,
  type Edge,
} from "@xyflow/react";
import { Box } from "@mui/material";

const CustomEdge: FC<EdgeProps<Edge<{ label: string }>>> = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
  markerEnd,
  style,
}) => {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <BaseEdge id={id} path={edgePath} markerEnd={markerEnd} style={style} />
      <EdgeLabelRenderer>
        <Box
          sx={{
            pl: 1,
            position: "absolute",
            transform: `translate(0%, -50%) translate(${labelX}px,${labelY}px)`,
            // transform: `translate(0%, -100%) translate(${labelX}px,${labelY}px)`,
            fontSize: "8px",
          }}
        >
          {data?.label}
        </Box>
      </EdgeLabelRenderer>
    </>
  );
};

export default CustomEdge;
