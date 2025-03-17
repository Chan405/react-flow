import React, { useState } from "react";
import "@xyflow/react/dist/style.css";
import { Box, FormControlLabel, Switch, Typography } from "@mui/material";
import { Handle, Position } from "@xyflow/react";

function RerankerSwitchNode() {
  const [reranker, setReranker] = useState(false);
  const [selectedReranker, setSelectedReranker] = useState(
    "rerank-multilingual-v3.0"
  );

  const handleRerankerChange = (event: any) => {
    setSelectedReranker(event.target.value);
  };
  const rerankerOptions = [
    { value: "rerank-multilingual-v3.0", label: "Rerank-multilingual-v3.0" },
    { value: "BAAI/bge-reranker-base", label: "BAAI/bge-reranker-base" },
  ];

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
        Reranker
      </Typography>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          // justifyContent: "space-between",
          alignItems: "center",
          px: 1,
          mx: "2px",
        }}
      >
        <Typography
          sx={{
            fontSize: "8px",
          }}
        >
          Status
        </Typography>

        <FormControlLabel
          control={
            <Switch
              checked={reranker}
              size="small"
              onChange={() => setReranker(!reranker)}
            />
          }
          label=""
          sx={{ ml: "12px" }}
        />
      </Box>

      {reranker && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 1,
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

          <Box>
            {rerankerOptions.map((option) => (
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
                    checked={selectedReranker === option.value}
                    onChange={handleRerankerChange}
                    style={{ width: "8px", height: "8px" }}
                  />
                  {option.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      )}

      <Handle type="source" position={Position.Right} />
    </Box>
  );
}

export default RerankerSwitchNode;
