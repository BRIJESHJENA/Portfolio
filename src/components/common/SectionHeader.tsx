import React from "react";
import { Box, Typography } from "@mui/material";
import ScrollReveal from "./ScrollReveal.tsx";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  subtitle,
  align = "center",
}) => (
  <ScrollReveal>
    <Box
      sx={{
        textAlign: align,
        mb: 5,
      }}
    >
      {label && (
        <Typography className="section-label" sx={{ mb: 1 }}>
          {label}
        </Typography>
      )}
      <Typography variant="h2" className="section-title" component="h2">
        {title}
      </Typography>
      {subtitle && (
        <Typography className="section-subtitle" sx={{ mt: 2, maxWidth: 560, mx: align === "center" ? "auto" : 0 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  </ScrollReveal>
);

export default SectionHeader;
