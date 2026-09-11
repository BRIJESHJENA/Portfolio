import React from "react";
import { Box, Typography } from "@mui/material";
import ScrollReveal from "../common/ScrollReveal.tsx";
import SectionHeader from "../common/SectionHeader.tsx";
import PageSection from "../common/PageSection.tsx";
import { usePortfolioData } from "../../context/PortfolioDataContext.tsx";
const EducationSection: React.FC = () => {
  const { education } = usePortfolioData();

  return (
    <PageSection id="education">
      <SectionHeader label="Background" title="Education" />

      <Box className="edu-list">
        {education.data.map((edu, index) => (
          <ScrollReveal key={edu.school} delay={index * 0.06}>
            <Box className="card card--hover edu-row">
              {edu.img && (
                <img className="edu-row__logo" src={edu.img} alt={edu.school} loading="lazy" />
              )}
              <Box sx={{ flex: 1, minWidth: 200 }}>
                <Typography className="card-title" sx={{ fontSize: "0.98rem" }}>
                  {edu.degree}
                </Typography>
                <Typography sx={{ fontSize: "0.85rem", color: "var(--text-muted)", mt: 0.25 }}>
                  {edu.school}
                </Typography>
              </Box>
              <span className="chip chip--mono">{edu.date}</span>
            </Box>
          </ScrollReveal>
        ))}
      </Box>
    </PageSection>
  );
};

export default EducationSection;
