import React, { useState } from "react";
import "@xyflow/react/dist/style.css";
import { Box, Typography } from "@mui/material";
import { Handle, Position } from "@xyflow/react";

function TemperatureNode() {
  const [temperature, setTemperature] = useState(0.5);

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
      <Typography
        sx={{
          fontSize: "8px",
          borderBottom: "1px solid #E0E0E0",
          textAlign: "center",
          padding: "2px",
          borderRadius: "8px 8px 0 0",
        }}
      >
        Temperature
      </Typography>

      <Box
        sx={{
          // width: "90%",
          // display: "flex",
          // justifyContent: "space-between",
          // alignItems: "center",
          // padding: "2px",
          // mx: "12px",
          p: 2,
        }}
      >
        {/* <Typography
          sx={{
            fontSize: "8px",
          }}
        >
          Temperature
        </Typography> */}

        <input
          type="range"
          min="0.1"
          max="1"
          step="0.1"
          value={temperature}
          onChange={(e) => setTemperature(parseFloat(e.target.value))}
          className="w-64"
        />
      </Box>

      <Handle type="source" position={Position.Top} id="top" />
    </Box>
  );
}

export default TemperatureNode;
