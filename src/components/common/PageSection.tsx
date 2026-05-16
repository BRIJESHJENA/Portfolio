import React from "react";
import { Box, BoxProps } from "@mui/material";

/** Consistent vertical rhythm + horizontal padding per breakpoint */
const PageSection: React.FC<BoxProps> = ({ children, className = "", sx, ...props }) => (
  <Box
    component="section"
    className={`page-section ${className}`.trim()}
    sx={{
      py: { xs: 3, sm: 4, md: 5, lg: 6 },
      ...sx,
    }}
    {...props}
  >
    {children}
  </Box>
);

export default PageSection;
