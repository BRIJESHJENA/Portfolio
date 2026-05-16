import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { skills } from "../../data/contents.ts";
import ScrollReveal from "../common/ScrollReveal.tsx";
import SectionHeader from "../common/SectionHeader.tsx";
import RetroBox from "../common/RetroBox.tsx";
import PageSection from "../common/PageSection.tsx";
import SkillIcon from "./SkillIcon.tsx";

const categories = [
  "Languages & Markup",
  "Frameworks & Libraries",
  "Backend Development",
  "Database Management",
  "Testing & Quality",
  "API Integrations",
];

const variantCycle = ["yellow", "blue", "pink", "purple", "white"] as const;

const SkillsSection: React.FC = () => (
  <PageSection>
    <SectionHeader
      label="Toolkit"
      title="Technical Skills"
      subtitle="Technologies and tools I use to build fast, modern web applications."
    />

    <div className="section-divider" />

    <Grid container spacing={{ xs: 1.5, sm: 2 }} className="equal-height-grid" sx={{ mb: { xs: 3, md: 4 } }}>
      {skills.map((category, categoryIndex) => (
        <Grid item xs={12} sm={6} lg={4} key={category.title} sx={{ display: "flex" }}>
          <ScrollReveal delay={categoryIndex * 0.08} stretch>
            <RetroBox
              className="skill-category-card"
              variant={variantCycle[categoryIndex % variantCycle.length]}
              sx={{ p: 2.5, width: "100%" }}
            >
              <Typography
                className="skill-category-card__title"
                sx={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1rem",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  textAlign: "center",
                  mb: 2,
                }}
              >
                {category.title}
              </Typography>
              <Grid container spacing={1} className="skill-category-card__grid">
                {category.skills.map((skill) => (
                  <Grid item xs={4} sm={4} md={4} key={`${category.title}-${skill.name}`} sx={{ display: "flex" }}>
                    <Box className="skill-brutal" sx={{ p: 1.5, textAlign: "center", width: "100%" }}>
                      <Box className="skill-brutal__icon">
                        <SkillIcon src={skill.image} name={skill.name} />
                      </Box>
                      <Typography sx={{ fontSize: "0.65rem", fontWeight: 700, lineHeight: 1.2 }}>
                        {skill.name}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </RetroBox>
          </ScrollReveal>
        </Grid>
      ))}
    </Grid>

    <ScrollReveal>
      <RetroBox variant="blue" sx={{ p: { xs: 2.5, md: 4 }, textAlign: "center" }}>
        <Typography
          sx={{
            fontFamily: "var(--font-display)",
            fontSize: "1.35rem",
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          Expertise Areas
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center" }}>
          {categories.map((cat) => (
            <span key={cat} className="brutal-chip brutal-chip--white">
              {cat}
            </span>
          ))}
        </Box>
      </RetroBox>
    </ScrollReveal>
  </PageSection>
);

export default SkillsSection;
