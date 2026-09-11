import React from "react";
import { Box, Typography } from "@mui/material";
import ScrollReveal from "../common/ScrollReveal.tsx";
import SectionHeader from "../common/SectionHeader.tsx";
import PageSection from "../common/PageSection.tsx";
import { usePortfolioData } from "../../context/PortfolioDataContext.tsx";
const stripBullet = (line: string) => line.replace(/^[•\-\s]+/, "");

const ExperienceSection: React.FC = () => {
  const { experiences } = usePortfolioData();

  return (
    <PageSection id="experience">
      <SectionHeader
        label="Career"
        title="Experience"
        subtitle="Roles where I've shipped production software — from frontend craft to full-stack delivery."
      />

      <Box className="timeline">
        {experiences.data.map((exp, index) => (
          <Box key={exp.id} className="timeline__item">
            <span className="timeline__dot" />
            <ScrollReveal delay={index * 0.08}>
              <Box className="card card--hover exp-card">
                <Box className="exp-card__head">
                  {exp.img && (
                    <img
                      className="exp-card__logo"
                      src={exp.img}
                      alt={exp.company}
                      loading="lazy"
                    />
                  )}
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography className="card-title" sx={{ fontSize: "1.05rem" }}>
                      {exp.role}
                    </Typography>
                    <Typography sx={{ fontSize: "0.875rem", color: "var(--text-muted)", mt: 0.25 }}>
                      {exp.company}
                    </Typography>
                  </Box>
                  <span className="chip chip--mono">{exp.date}</span>
                </Box>

                <Box component="ul" className="exp-card__list">
                  {exp.desc.map((item, i) => (
                    <li key={i}>{stripBullet(item)}</li>
                  ))}
                </Box>

                <Box className="tag-row" sx={{ mt: 2 }}>
                  {exp.skills.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </Box>
              </Box>
            </ScrollReveal>
          </Box>
        ))}
      </Box>
    </PageSection>
  );
};

export default ExperienceSection;
