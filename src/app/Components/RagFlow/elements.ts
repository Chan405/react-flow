import { MarkerType } from "@xyflow/react";
import Augment from "./Augment";
import Chunk from "./Chunk";
import Context from "./Context";
import CustomEdge from "./CustomEdge";
import Document from "./Document";
import Embedding from "./Embed";
import ModelNode from "./Model";
import ParsedDocument from "./ParsedDocument";
import Reranker from "./Reranker";
import ResponseNode from "./Response";
import UserNode from "./User";
import VectorStore from "./VectorStore";

export const nodeTypes = {
  userNode: UserNode,
  responseNode: ResponseNode,
  modelNode: ModelNode,
  augmentNode: Augment,
  contextNode: Context,
  rerankerNode: Reranker,
  // Indexing
  documentNode: Document,
  parsedDocumentNode: ParsedDocument,
  chunkNode: Chunk,
  embeddingNode: Embedding,
  vectorStoreNode: VectorStore,
};
export const edgeTypes = {
  custom: CustomEdge,
};

export const nodes = [
  {
    id: "documentNode",
    type: "documentNode",
    position: { x: 200, y: -70 },
    data: { label: "documentNode" },
    draggable: false,
  },
  {
    id: "parsedDocumentNode",
    type: "parsedDocumentNode",
    position: { x: 190, y: 20 },
    data: { label: "parsedDocumentNode" },
    draggable: false,
  },
  {
    id: "chunkNode",
    type: "chunkNode",
    position: { x: 195, y: 130 },
    data: { label: "chunkNode" },
    draggable: false,
  },
  {
    id: "embeddingNode",
    type: "embeddingNode",
    position: { x: 135, y: 230 },
    data: { label: "embeddingNode" },
    draggable: false,
  },
  {
    id: "vectorStoreNode",
    type: "vectorStoreNode",
    position: { x: 175, y: 360 },
    data: { label: "vectorStoreNode" },
    draggable: false,
  },
  {
    id: "contextNode",
    type: "contextNode",
    position: { x: 350, y: 372 },
    data: { label: "Contexts" },
    draggable: false,
  },
  {
    id: "rerankerNode",
    type: "rerankerNode",
    position: { x: 460, y: 365 },
    data: { label: "rerankerNode" },
    draggable: false,
  },
  {
    id: "rerankedContextNode",
    type: "contextNode",
    position: { x: 665, y: 365 },
    data: { label: "Contexts After Reranking " },
    draggable: false,
  },
  {
    id: "augmentNode",
    type: "augmentNode",
    position: { x: 780, y: 362 },
    data: { label: "augmentNode" },
    draggable: false,
  },

  {
    id: "llmNode",
    type: "modelNode",
    position: { x: 190, y: 450 },
    data: { label: "modelNode" },
    draggable: false,
  },
  {
    id: "responseNode",
    type: "responseNode",
    position: { x: -50, y: 470 },
    data: { label: "responseNode" },
    draggable: false,
  },
  {
    id: "userNode",
    type: "userNode",
    position: { x: -50, y: 350 },
    data: { label: "userNode" },
    draggable: false,
  },
];

export const edges = [
  {
    id: "e1",
    source: "documentNode",
    target: "parsedDocumentNode",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 14,
      height: 14,
      color: "#00bfa1",
    },
    data: { label: "Parssing and Processing" },
    style: {
      strokeWidth: 1.5,
      stroke: "#00bfa1",
    },
    type: "custom",
  },
  {
    id: "e2",
    source: "parsedDocumentNode",
    target: "chunkNode",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 14,
      height: 14,
      color: "#00bfa1",
    },
    data: { label: "Chunking" },
    style: {
      strokeWidth: 1.5,
      stroke: "#00bfa1",
    },
    type: "custom",
  },
  {
    id: "e3",
    source: "chunkNode",
    target: "embeddingNode",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 14,
      height: 14,
      color: "#00bfa1",
    },
    style: {
      strokeWidth: 1.5,
      stroke: "#00bfa1",
    },
    type: "custom",
  },
  {
    id: "e4",
    source: "embeddingNode",
    target: "vectorStoreNode",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 14,
      height: 14,
      color: "#00bfa1",
    },
    data: { label: "Vectorizing" },
    style: {
      strokeWidth: 1.5,
      stroke: "#00bfa1",
    },
    type: "custom",
  },
  {
    id: "e5",
    source: "vectorStoreNode",
    target: "contextNode",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 14,
      height: 14,
      color: "#00bfa1",
    },
    // data: { label: "Retrieving" },
    style: {
      strokeWidth: 1.5,
      stroke: "#00bfa1",
    },
    type: "custom",
  },
  {
    id: "e6",
    source: "contextNode",
    target: "rerankerNode",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 14,
      height: 14,
      color: "#00bfa1",
    },
    // data: { label: "Retrieving" },
    style: {
      strokeWidth: 1.5,
      stroke: "#00bfa1",
    },
    type: "custom",
  },
  {
    id: "e7",
    source: "rerankerNode",
    target: "rerankedContextNode",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 14,
      height: 14,
      color: "#00bfa1",
    },
    // data: { label: "Retrieving" },
    style: {
      strokeWidth: 1.5,
      stroke: "#00bfa1",
    },
    type: "custom",
  },
  {
    id: "e8",
    source: "rerankedContextNode",
    target: "augmentNode",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 14,
      height: 14,
      color: "#00bfa1",
    },
    // data: { label: "Retrieving" },
    style: {
      strokeWidth: 1.5,
      stroke: "#00bfa1",
    },
    type: "custom",
  },
  {
    id: "e9",
    source: "augmentNode",
    target: "llmNode",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 14,
      height: 14,
      color: "#00bfa1",
    },
    // data: { label: "Retrieving" },
    style: {
      strokeWidth: 1.5,
      stroke: "#00bfa1",
    },
    type: "step",
  },
  {
    id: "e10",
    source: "llmNode",
    target: "responseNode",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 14,
      height: 14,
      color: "#00bfa1",
    },
    // data: { label: "Retrieving" },
    style: {
      strokeWidth: 1.5,
      stroke: "#00bfa1",
    },
  },
  {
    id: "e11",
    source: "responseNode",
    target: "userNode",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 14,
      height: 14,
      color: "#00bfa1",
    },
    // data: { label: "Retrieving" },
    style: {
      strokeWidth: 1.5,
      stroke: "#00bfa1",
    },
  },
];
