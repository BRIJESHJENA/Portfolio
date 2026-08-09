import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import ScrollReveal from "../common/ScrollReveal.tsx";
import SectionHeader from "../common/SectionHeader.tsx";
import PageSection from "../common/PageSection.tsx";
import { usePortfolioData } from "../../context/PortfolioDataContext.tsx";
import { ProjectsSkeleton } from "../skeletons/index.tsx";

const ProjectsSection: React.FC = () => {
  const { projects } = usePortfolioData();

  if (projects.isLoading) {
    return <ProjectsSkeleton />;
  }

  return (
    <PageSection id="projects">
      <SectionHeader
        label="Work"
        title="Selected projects"
        subtitle="Production SaaS platforms and personal builds — from creator CMS to interactive tooling."
      />

      <div className="project-grid">
        {projects.data.map((project, index) => (
          <ScrollReveal key={project.id} delay={index * 0.08} stretch>
            <Box className="card card--hover project-card">
              {project.image && (
                <Box className="project-card__media">
                  <img src={project.image} alt={project.title} loading="lazy" />
                </Box>
              )}

              <Box className="project-card__body">
                <Typography className="card-title" sx={{ fontSize: "1.1rem" }}>
                  {project.title}
                </Typography>

                <Typography className="body-text project-card__desc">
                  {project.description}
                </Typography>

                <Box className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </Box>

                <Box className="project-card__actions">
                  {project.webapp && (
                    <a
                      href={project.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--primary btn--sm"
                    >
                      Live site
                      <ArrowOutwardRoundedIcon sx={{ fontSize: 14 }} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--ghost btn--sm"
                    >
                      <GitHubIcon sx={{ fontSize: 15 }} />
                      Code
                    </a>
                  )}
                </Box>
              </Box>
            </Box>
          </ScrollReveal>
        ))}
      </div>
    </PageSection>
  );
};

export default ProjectsSection;
