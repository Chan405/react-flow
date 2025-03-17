import React, { useState } from "react";
import "@xyflow/react/dist/style.css";
import { Box, Typography } from "@mui/material";
import { Handle, Position } from "@xyflow/react";

function MaxTokenNode() {
  const [token, setToken] = useState(10);

  return (
    <Box
      sx={{
        width: "150px",
        // height: "30px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        border: "1px solid #E0E0E0",
      }}
    >
      {/* <Typography
        sx={{
          fontSize: "8px",
          borderBottom: "1px solid #E0E0E0",
          textAlign: "center",
          padding: "2px",
          borderRadius: "8px 8px 0 0",
        }}
      >
        {" "}
        Top Values
      </Typography> */}

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
          Maximum Output Token
        </Typography>

        <input
          type="number"
          value={token}
          onChange={(e) => setToken(parseInt(e.target.value))}
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
        />
      </Box>

      <Handle type="source" position={Position.Bottom} id="bottom" />
    </Box>
  );
}

export default MaxTokenNode;
