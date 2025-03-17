import React, { useState } from "react";
import "@xyflow/react/dist/style.css";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Handle, Position } from "@xyflow/react";

function OutputNode() {
  return (
    <Box
      sx={{
        width: "100px",
        // height: "30px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        border: "1px solid #E0E0E0",
      }}
    >
      <Handle type="target" position={Position.Top} id="top" />

      <Typography
        sx={{
          fontSize: "8px",
          borderBottom: "1px solid #E0E0E0",
          textAlign: "center",
          padding: "2px",
          borderRadius: "8px 8px 0 0",
        }}
      >
        Chatbot
      </Typography>

      <Image src={"/assets/bot.svg"} alt="bot" width={20} height={20} />

      <Handle type="target" position={Position.Left} id="left" />
    </Box>
  );
}

export default OutputNode;
