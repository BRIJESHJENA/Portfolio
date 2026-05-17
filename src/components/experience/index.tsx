import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { experiences } from "../../data/contents.ts";
import ScrollReveal from "../common/ScrollReveal.tsx";
import SectionHeader from "../common/SectionHeader.tsx";
import RetroBox from "../common/RetroBox.tsx";
import PageSection from "../common/PageSection.tsx";

const highlights = [
  "2+ Years Experience",
  "Full Stack Development",
  "React & Vue.js",
  "Backend Integration",
  "Database Management",
  "UI/UX Design",
];

const ExperienceSection: React.FC = () => (
  <PageSection>
    <SectionHeader
      label="Career"
      title="Experience"
      subtitle="My journey in software development â€” from frontend craft to full-stack delivery."
    />

    <div className="section-divider" />

    <Box className="timeline-brutal" sx={{ pl: { xs: 1.25, sm: 2, md: 3 } }}>
      {experiences.map((exp, index) => (
        <ScrollReveal key={exp.id} delay={index * 0.08} direction="up">
          <Box sx={{ position: "relative", mb: { xs: 2.5, md: 4 }, pl: { xs: 1.5, sm: 2 } }}>
            <Box className="timeline-dot" />
            <RetroBox
              variant={index % 3 === 0 ? "white" : index % 3 === 1 ? "blue" : "yellow"}
              sx={{ p: { xs: 2, sm: 2.5, md: 3 } }}
            >
              <Box className="exp-card-header">
                <Avatar
                  src={exp.img}
                  sx={{
                    width: { xs: 44, sm: 52 },
                    height: { xs: 44, sm: 52 },
                    border: "3px solid var(--border-color)",
                    borderRadius: "4px",
                    boxShadow: "2px 2px 0 var(--border-color)",
                    flexShrink: 0,
                  }}
                />
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography
                    sx={{
                      fontFamily: "var(--font-display)",
                      fontSize: { xs: "0.85rem", sm: "1rem" },
                      fontWeight: 900,
                      textTransform: "uppercase",
                      lineHeight: 1.2,
                    }}
                  >
                    {exp.role}
                  </Typography>
                  <Typography sx={{ fontWeight: 600, opacity: 0.85, fontSize: { xs: "0.8rem", sm: "0.875rem" } }}>
                    {exp.company}
                  </Typography>
                </Box>
                <span className="brutal-chip brutal-chip--pink">{exp.date}</span>
              </Box>

              <Box sx={{ mb: 2 }}>
                {exp.desc.map((item, i) => (
                  <Typography
                    key={i}
                    sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, mb: 0.75, lineHeight: 1.55, fontWeight: 500 }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {exp.skills.map((skill) => (
                  <span key={skill} className="brutal-chip">
                    {skill}
                  </span>
                ))}
              </Box>
            </RetroBox>
          </Box>
        </ScrollReveal>
      ))}
    </Box>

    <ScrollReveal>
      <RetroBox variant="purple" sx={{ p: { xs: 2.5, md: 4 }, textAlign: "center", mt: 1 }}>
        <Typography
          sx={{
            fontFamily: "var(--font-display)",
            fontSize: { xs: "1.1rem", md: "1.35rem" },
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          Career Highlights
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, justifyContent: "center" }}>
          {highlights.map((h) => (
            <span key={h} className="brutal-chip brutal-chip--white">
              {h}
            </span>
          ))}
        </Box>
      </RetroBox>
    </ScrollReveal>
  </PageSection>
);

export default ExperienceSection;
