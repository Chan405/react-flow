"use client";
import React from "react";
import { ReactFlow, ReactFlowProvider } from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import RerankerSwitchNode from "./RerankerSwitchNode";
import VectorStoreNode from "./VectorStoreNode";
import EmbeddingModelNode from "./EmbeddingModelNode";
import OutputNode from "./OutputNode";
import ChunkNode from "./ChunkNode";
import TopValuesNode from "./TopValuesNode";
import MaxTokenNode from "./MaxTokenNode";
import TemperatureNode from "./TemperatureNode";

const VisualizationFlow = () => {
  const nodeTypes = {
    rerankerSwitch: RerankerSwitchNode,
    vectorStore: VectorStoreNode,
    embedding: EmbeddingModelNode,
    chunk: ChunkNode,
    topValues: TopValuesNode,
    maxToken: MaxTokenNode,
    temperature: TemperatureNode,
    output: OutputNode,
  };
  const nodes = [
    {
      id: "1",
      type: "rerankerSwitch",
      position: { x: 0, y: 0 },
      data: { label: "Reranker Switch" },
      draggable: false,
    },
    {
      id: "2",
      type: "vectorStore",
      position: { x: 25, y: 80 },
      data: { label: "VectorStore" },
      draggable: false,
    },
    {
      id: "3",
      type: "embedding",
      position: { x: -30, y: 140 },
      data: { label: "embedding" },
      draggable: false,
    },
    {
      id: "4",
      type: "chunk",
      position: { x: 0, y: 240 },
      data: { label: "chunk" },
      draggable: false,
    },
    {
      id: "5",
      type: "topValues",
      position: { x: 0, y: 340 },
      data: { label: "topValues" },
      draggable: false,
    },
    {
      id: "6",
      type: "maxToken",
      position: { x: 250, y: 30 },
      data: { label: "maxToken" },
      draggable: false,
    },
    {
      id: "7",
      type: "temperature",
      position: { x: 270, y: 340 },
      data: { label: "temperature" },
      draggable: false,
    },
    {
      id: "13",
      type: "output",
      position: { x: 300, y: 100 },
      data: { label: "output" },
      draggable: false,
    },
  ];

  const edges = [
    { id: "e1-13", source: "1", target: "13", targetHandle: "left" },
    { id: "e2-13", source: "2", target: "13", targetHandle: "left" },
    { id: "e3-13", source: "3", target: "13", targetHandle: "left" },
    { id: "e4-13", source: "4", target: "13", targetHandle: "left" },
    { id: "e5-13", source: "5", target: "13", targetHandle: "left" },
    {
      id: "e6-13",
      source: "6",
      target: "13",
      sourceHandle: "bottom", // Connect from bottom of maxToken
      targetHandle: "top",
    },
    {
      id: "e7-13",
      source: "7",
      target: "13",
      sourceHandle: "top", // Connect from bottom of maxToken
      targetHandle: "left",
    },
  ];

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      style={{ backgroundColor: "#F7F9FB" }}
      fitView
    >
      {/* <Background /> */}
    </ReactFlow>
  );
};

export const Visualization = () => (
  <ReactFlowProvider>
    <VisualizationFlow />
  </ReactFlowProvider>
);
