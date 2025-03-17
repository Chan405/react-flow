import React, { useState } from "react";
import "@xyflow/react/dist/style.css";
import { Box, Typography } from "@mui/material";
import { Handle, Position } from "@xyflow/react";

function VectorStoreNode() {
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
        width: "100px",
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
        Vector Store
      </Typography>

      {
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
            Model
          </Typography>

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
      }
      <Handle type="source" position={Position.Right} />
    </Box>
  );
}

export default VectorStoreNode;
