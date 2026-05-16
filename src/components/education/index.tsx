import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { education } from "../../data/contents.ts";
import ScrollReveal from "../common/ScrollReveal.tsx";
import SectionHeader from "../common/SectionHeader.tsx";
import RetroBox from "../common/RetroBox.tsx";
import PageSection from "../common/PageSection.tsx";

const EducationSection: React.FC = () => (
  <PageSection sx={{ pt: { xs: 2, md: 3 } }}>
    <SectionHeader label="Background" title="Education" align="left" />

    {education.map((edu, index) => (
      <ScrollReveal key={edu.school} delay={index * 0.1}>
        <RetroBox
          variant={index % 2 === 0 ? "white" : "yellow"}
          sx={{
            p: { xs: 2, sm: 2.5, md: 3 },
            mb: { xs: 1.5, md: 2 },
            display: "flex",
            alignItems: { xs: "flex-start", sm: "center" },
            gap: { xs: 1.5, sm: 2 },
            flexWrap: "wrap",
          }}
        >
          <Avatar
            src={edu.img}
            alt={edu.school}
            sx={{
              width: { xs: 56, sm: 72 },
              height: { xs: 56, sm: 72 },
              border: "3px solid var(--border-color)",
              borderRadius: "4px",
              boxShadow: "3px 3px 0 var(--border-color)",
              flexShrink: 0,
            }}
          />
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              sx={{
                fontFamily: "var(--font-display)",
                fontSize: { xs: "0.9rem", sm: "1.1rem" },
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: 1.2,
              }}
            >
              {edu.degree}
            </Typography>
            <Typography sx={{ fontWeight: 600, opacity: 0.85, fontSize: { xs: "0.85rem", sm: "1rem" }, mt: 0.5 }}>
              {edu.school}
            </Typography>
            <span className="brutal-chip brutal-chip--pink" style={{ marginTop: 8, display: "inline-block" }}>
              {edu.date}
            </span>
          </Box>
        </RetroBox>
      </ScrollReveal>
    ))}
  </PageSection>
);

export default EducationSection;
