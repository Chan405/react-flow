import { Box, Typography } from "@mui/material";
import { Handle, Position } from "@xyflow/react";
import Image from "next/image";
import React from "react";

function Document() {
  return (
    <Box
      sx={{
        width: "70px",
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
        Document
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
        <Image src={"/assets/localdocu.png"} alt="doc" width={16} height={16} />
        <Image src={"/assets/website.png"} alt="doc" width={15} height={15} />
        <Image src={"/assets/clouddocu.jpg"} alt="doc" width={16} height={16} />
      </Box>
      <Handle type="source" position={Position.Bottom} id="bottom" />

      {/* <Handle type="target" position={Position.Left} id="left" /> */}
    </Box>
  );
}

export default Document;
