import React from "react";
import { Box, Typography } from "@mui/material";
import ScrollReveal from "../common/ScrollReveal.tsx";
import SectionHeader from "../common/SectionHeader.tsx";
import PageSection from "../common/PageSection.tsx";
import SkillIcon from "./SkillIcon.tsx";
import { usePortfolioData } from "../../context/PortfolioDataContext.tsx";
const SkillsSection: React.FC = () => {
  const { skills } = usePortfolioData();

  return (
    <PageSection id="skills">
      <SectionHeader
        label="Toolkit"
        title="Skills & tools"
        subtitle="The technologies I reach for when building fast, maintainable web applications."
      />

      <div className="skills-grid">
        {skills.data.map((category, index) => (
          <ScrollReveal key={category.title} delay={index * 0.06} stretch>
            <Box className="card card--hover skill-card">
              <Typography className="skill-card__title">{category.title}</Typography>
              <Box className="skill-card__list">
                {category.skills.map((skill) => (
                  <span key={`${category.title}-${skill.name}`} className="skill-pill">
                    <span className="skill-pill__icon">
                      <SkillIcon src={skill.image} name={skill.name} />
                    </span>
                    {skill.name}
                  </span>
                ))}
              </Box>
            </Box>
          </ScrollReveal>
        ))}
      </div>
    </PageSection>
  );
};

export default SkillsSection;
