import React from "react";
import { Box, BoxProps } from "@mui/material";

export type RetroVariant = "pink" | "yellow" | "blue" | "white" | "dark" | "purple";

interface RetroBoxProps extends BoxProps {
  variant?: RetroVariant;
  shadow?: "sm" | "md" | "lg" | "none";
  hoverLift?: boolean;
}

const variantClass: Record<RetroVariant, string> = {
  pink: "retro-box--pink",
  yellow: "retro-box--yellow",
  blue: "retro-box--blue",
  white: "retro-box--white",
  dark: "retro-box--dark",
  purple: "retro-box--purple",
};

const shadowClass: Record<NonNullable<RetroBoxProps["shadow"]>, string> = {
  sm: "retro-shadow-sm",
  md: "retro-shadow",
  lg: "retro-shadow-lg",
  none: "",
};

const RetroBox: React.FC<RetroBoxProps> = ({
  variant = "white",
  shadow = "md",
  hoverLift = true,
  className = "",
  children,
  ...props
}) => (
  <Box
    className={[
      "retro-box",
      variantClass[variant],
      shadowClass[shadow],
      hoverLift ? "retro-hover-lift" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ")}
    {...props}
  >
    {children}
  </Box>
);

export default RetroBox;
