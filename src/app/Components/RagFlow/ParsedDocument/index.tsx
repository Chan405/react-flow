import { Box, Typography } from "@mui/material";
import { Handle, Position } from "@xyflow/react";
import Image from "next/image";
import React from "react";

function ParsedDocument() {
  return (
    <Box
      sx={{
        width: "90px",
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
        Parsed Documents
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          px: 3,
          py: 1,
        }}
      >
        <Image
          src={"/assets/parseddocu.png"}
          alt="doc"
          width={30}
          height={30}
        />
      </Box>
      <Handle type="source" position={Position.Bottom} id="bottom" />

      <Handle type="target" position={Position.Top} id="top" />
    </Box>
  );
}

export default ParsedDocument;
