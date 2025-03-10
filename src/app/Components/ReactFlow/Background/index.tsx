/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  Controls,
} from "@xyflow/react";

export default function Flow() {
  return (
    <ReactFlow defaultNodes={[]} defaultEdges={[]}>
      {/* <Background color="#ccc" variant={BackgroundVariant.Dots} /> */}
      <Controls />
    </ReactFlow>
  );
}
