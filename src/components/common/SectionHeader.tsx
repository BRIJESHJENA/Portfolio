import React from "react";
import { Box, Typography } from "@mui/material";
import ScrollReveal from "./ScrollReveal.tsx";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ label, title, subtitle, action }) => (
  <ScrollReveal>
    <Box
      sx={{
        display: "flex",
        alignItems: { xs: "flex-start", md: "flex-end" },
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
        gap: 2,
        mb: { xs: 3, md: 4.5 },
      }}
    >
      <Box>
        {label && (
          <Typography className="eyebrow" sx={{ color: "var(--text-muted) !important" }}>
            {label}
          </Typography>
        )}
        <Typography component="h2" className="section-title" sx={{ mt: label ? 1.5 : 0 }}>
          {title}
        </Typography>
        {subtitle && (
          <Typography className="section-subtitle" sx={{ mt: 1.5 }}>
            {subtitle}
          </Typography>
        )}
      </Box>
      {action}
    </Box>
  </ScrollReveal>
);

export default SectionHeader;
