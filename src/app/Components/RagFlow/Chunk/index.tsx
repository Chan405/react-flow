import { Box, Typography } from "@mui/material";
import { Handle, Position } from "@xyflow/react";
import React, { useState } from "react";

function Chunk() {
  const [chunkSize, setChunkSize] = useState(2000);
  const [chunkOverlap, setChunkOverlap] = useState(200);
  return (
    <Box
      sx={{
        width: "80px",
        // height: "30px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        border: "1px solid #E0E0E0",
        // textAlign: "center",
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
        Chunks
      </Typography>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "2px",
          mx: "2px",
        }}
      >
        <Typography
          sx={{
            fontSize: "8px",
          }}
        >
          Chunk Size
        </Typography>

        {/* <input
          type="number"
          value={chunkSize}
          onChange={(e) => setChunkSize(parseInt(e.target.value))}
          style={{
            width: "80px",
            height: "15px",
            fontSize: "8px",
            border: "1px solid #E0E0E0",
            outline: "none",
            borderRadius: "4px",
            padding: "0px 12px",
            margin: "0px 4px",
          }}
          readOnly
        /> */}
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "2px",
          mx: "2px",
        }}
      >
        <Typography
          sx={{
            fontSize: "8px",
          }}
        >
          Chunk Overlap
        </Typography>

        {/* <input
          type="number"
          value={chunkOverlap}
          onChange={(e) => setChunkOverlap(parseInt(e.target.value))}
          style={{
            width: "80px",
            height: "15px",
            fontSize: "8px",
            border: "1px solid #E0E0E0",
            outline: "none",
            borderRadius: "4px",
            padding: "0px 12px",
            margin: "0px 4px",
          }}
          readOnly
        /> */}
      </Box>
      <Handle type="target" position={Position.Top} id="top" />
      <Handle type="source" position={Position.Bottom} id="bottom" />
    </Box>
  );
}

export default Chunk;
