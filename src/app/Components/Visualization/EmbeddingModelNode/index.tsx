import React, { useState } from "react";
import "@xyflow/react/dist/style.css";
import { Box, Typography } from "@mui/material";
import { Handle, Position } from "@xyflow/react";

function EmbeddingModelNode() {
  const [selectedEmbedding, setSelectedEmbedding] = useState(
    "text-embedding-3-large"
  );

  const handleEmbeddingChange = (event: any) => {
    setSelectedEmbedding(event.target.value);
  };
  const embeddingOptions = [
    {
      value: "text-embedding-3-large",
      label: "Text Embedding Large (256 Dimensions)",
    },
    {
      value: "text-embedding-3-small",
      label: "Text Embedding Small (512 Dimensions)",
    },
    {
      value: "text-embedding-ada-002",
      label: "Text Embedding ADA 002",
    },
    {
      value: "BAAI/bge-m3",
      label: "BAAI/bge-m3",
    },
  ];

  return (
    <Box
      sx={{
        width: "200px",
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
        Embedding Model
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
          {/* <Typography
            sx={{
              fontSize: "8px",
            }}
          >
            Model
          </Typography> */}

          <Box sx={{ px: 2 }}>
            {embeddingOptions.map((option) => (
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
                    checked={selectedEmbedding === option.value}
                    onChange={handleEmbeddingChange}
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

export default EmbeddingModelNode;
