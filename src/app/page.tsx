/* eslint-disable @typescript-eslint/no-unused-vars */
import { ExampleAddNodeOnEdgeDrop } from "./Components/ReactFlow/AddNodeOnEdgeDrop";
import Flow from "./Components/ReactFlow/Background";
import CustomEdge from "./Components/ReactFlow/CustomEdge";
import HiddenFlow from "./Components/ReactFlow/HiddenFlow";
import { ProximityConnect } from "./Components/ReactFlow/ProximityConnect";

export default function Home() {
  return (
    <div style={{ height: "100vh" }}>
      {/* <Flow /> */}
      {/* <HiddenFlow /> */}
      {/* <ExampleAddNodeOnEdgeDrop /> */}
      <ProximityConnect />
    </div>
  );
}
