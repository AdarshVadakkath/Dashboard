import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";

const CampaignBanner: React.FC = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, #b084f8 0%, #837bf5 50%, #6dc0f7 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: 3, // More rounded
        px: 3,
        py: 3.5,
        mb: 2,
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Box>
        <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", mb: 0.3 }}>
          Unlock the Power of Our New Campaign Management Dashboard!
        </Typography>
        <Typography sx={{ fontSize: "0.75rem", opacity: 0.85 }}>
          Introducing our latest innovation – a revolutionary dashboard designed
          to elevate your campaign management.
        </Typography>
      </Box>

      <Button
        size="small"
        sx={{
          ml: 2,
          fontSize: "0.7rem",
          px: 1.5,
          py: 0.5,
          borderRadius: 2,
          bgcolor: "rgba(255,255,255,0.2)",
          color: "#3e2723",
          border: "1px solid rgba(255,255,255,0.3)",
          backdropFilter: "blur(6px)",
          whiteSpace: "nowrap",
          "&:hover": {
            bgcolor: "rgba(255,255,255,0.3)",
          },
        }}
      >
        Try the New Features Now!
      </Button>
    </Box>
  );
};

export default CampaignBanner;
