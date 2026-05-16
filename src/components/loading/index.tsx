import React from "react";
import { Box, Typography } from "@mui/material";

const LoadingSpinner: React.FC = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "var(--paper)",
    }}
  >
    <Box
      className="retro-box retro-box--pink retro-shadow-lg"
      sx={{
        width: 88,
        height: 88,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 3,
        animation: "pulse 1.5s ease-in-out infinite",
      }}
    >
      <Typography
        sx={{
          fontFamily: "var(--font-display)",
          fontSize: "2.5rem",
          fontWeight: 900,
          color: "var(--ink)",
        }}
      >
        B
      </Typography>
    </Box>

    <Typography
      sx={{
        fontFamily: "var(--font-display)",
        fontSize: "1.25rem",
        textTransform: "uppercase",
        mb: 2,
      }}
    >
      Loading Portfolio...
    </Typography>

    <Box sx={{ display: "flex", gap: 1 }}>
      {[0, 1, 2].map((index) => (
        <Box
          key={index}
          sx={{
            width: 10,
            height: 10,
            background: "var(--yellow)",
            border: "2px solid var(--ink)",
            boxShadow: "2px 2px 0 var(--ink)",
            animation: "pulse 1.2s ease-in-out infinite",
            animationDelay: `${index * 0.2}s`,
          }}
        />
      ))}
    </Box>
  </Box>
);

export default LoadingSpinner;
