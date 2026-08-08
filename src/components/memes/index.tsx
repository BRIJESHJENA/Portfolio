import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { memeWall } from "../../data/memes.ts";
import ScrollReveal from "../common/ScrollReveal.tsx";
import SectionHeader from "../common/SectionHeader.tsx";
import PageSection from "../common/PageSection.tsx";

const PREVIEW_COUNT = 6;

const MemesSection: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? memeWall : memeWall.slice(0, PREVIEW_COUNT);

  return (
    <PageSection id="memes">
      <SectionHeader
        label="Off the record"
        title="Dev life, unfiltered"
        subtitle="Every bullet point above came with at least one of these moments."
      />

      <div className="meme-grid">
        {visible.map((meme, index) => (
          <ScrollReveal key={meme.image} delay={(index % 3) * 0.08} stretch>
            <Box className="card card--hover meme-card">
              <Typography className="meme-card__situation">{meme.situation}</Typography>
              <Box className="meme-card__media">
                <img src={meme.image} alt={meme.alt} loading="lazy" />
              </Box>
            </Box>
          </ScrollReveal>
        ))}
      </div>

      {memeWall.length > PREVIEW_COUNT && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <button type="button" className="btn btn--ghost" onClick={() => setExpanded(!expanded)}>
            {expanded ? "That's enough" : `Show ${memeWall.length - PREVIEW_COUNT} more`}
          </button>
        </Box>
      )}
    </PageSection>
  );
};

export default MemesSection;
