import { Box, Typography } from "@mui/material";
import { Handle, Position } from "@xyflow/react";
import Image from "next/image";
import React from "react";

function ModelNode() {
  return (
    <Box
      sx={{
        width: "90px",
        // height: "30px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        border: "1px solid #E0E0E0",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: "8px",
          borderBottom: "1px solid #E0E0E0",
          textAlign: "center",
          padding: "2px",
          borderRadius: "8px 8px 0 0",
        }}
      >
        LLM Model
      </Typography>

      <Image
        src={"/assets/llm.jpg"}
        alt="user"
        width={60}
        height={60}
        style={{ margin: "4px 0 0 0 " }}
      />
      <Handle type="source" position={Position.Left} id="left" />

      <Handle type="target" position={Position.Right} id="right" />
    </Box>
  );
}

export default ModelNode;
