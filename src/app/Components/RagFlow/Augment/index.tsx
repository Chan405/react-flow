import { Box, Typography } from "@mui/material";
import { Handle, Position } from "@xyflow/react";
import React from "react";

function Augment() {
  return (
    <Box
      sx={{
        width: "130px",
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
        Augment
      </Typography>

      <Box sx={{ fontSize: "8px", py: "6px" }}>
        <ul
          style={{
            margin: 0,
            paddingLeft: "10px",
            listStylePosition: "inside",
          }}
        >
          <li> Prompt</li>
          <li> Top K Relevent Contexts </li>
        </ul>
      </Box>
      <Handle type="source" position={Position.Bottom} id="bottom" />

      <Handle type="target" position={Position.Left} id="left" />
    </Box>
  );
}

export default Augment;
