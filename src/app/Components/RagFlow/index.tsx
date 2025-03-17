"use client";
import React from "react";
import { ReactFlow, ReactFlowProvider } from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import { edges, edgeTypes, nodes, nodeTypes } from "./elements";

const RagFlow = () => {
  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      edges={edges}
      style={{ backgroundColor: "#F7F9FB" }}
      fitView
    >
      {/* <Background /> */}
    </ReactFlow>
  );
};

export const RagFlowVisualization = () => (
  <ReactFlowProvider>
    <RagFlow />
  </ReactFlowProvider>
);
