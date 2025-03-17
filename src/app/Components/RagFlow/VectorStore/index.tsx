import { Box, Typography } from "@mui/material";
import { Handle, Position } from "@xyflow/react";
import React, { useState } from "react";

function VectorStore() {
  const [selectedVectorStore, setSelectedVectorStore] = useState(
    "rerank-multilingual-v3.0"
  );

  const handleVectorStoreChange = (event: any) => {
    setSelectedVectorStore(event.target.value);
  };
  const vectorStoreOptions = [
    { value: "chroma", label: "Chroma" },
    { value: "elastic", label: "Elastic" },
  ];

  return (
    <Box
      sx={{
        width: "120px",
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
        Vector Store
      </Typography>

      <Box sx={{ fontSize: "8px", py: "6px" }}>
        <Box sx={{ px: 2 }}>
          {vectorStoreOptions.map((option) => (
            <Box key={option.value}>
              <Typography
                sx={{
                  fontSize: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "2px",
                }}
              >
                <input
                  type="radio"
                  value={option.value}
                  checked={selectedVectorStore === option.value}
                  onChange={handleVectorStoreChange}
                  style={{ width: "8px", height: "8px" }}
                />
                {option.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Handle type="target" position={Position.Top} id="top" />
      <Handle type="source" position={Position.Right} id="right" />
    </Box>
  );
}

export default VectorStore;
