import React from "react";
import { Box } from "@mui/material";

interface MarqueeProps {
  items: string[];
  speed?: number;
}

const Marquee: React.FC<MarqueeProps> = ({ items, speed = 28 }) => {
  const track = [...items, ...items];

  return (
    <Box className="marquee-wrap" sx={{ mb: { xs: 1.5, sm: 2, md: 3 }, mx: { xs: 0, md: 0 } }}>
      <Box
        className="marquee-track"
        sx={{ animationDuration: `${speed}s` }}
      >
        {track.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee-item">
            {item}
            <span className="marquee-dot">★</span>
          </span>
        ))}
      </Box>
    </Box>
  );
};

export default Marquee;
