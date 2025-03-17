import { Box, Typography } from "@mui/material";
import { Handle, Position } from "@xyflow/react";
import Image from "next/image";
import React from "react";

function ResponseNode() {
  return (
    <Box
      sx={{
        width: "50px",
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
        Response
      </Typography>

      <Image
        src={"/assets/bot.svg"}
        alt="user"
        width={20}
        height={20}
        style={{ margin: "4px 0 0 0 " }}
      />
      <Handle type="source" position={Position.Top} id="top" />

      <Handle type="target" position={Position.Right} id="right" />
    </Box>
  );
}

export default ResponseNode;
