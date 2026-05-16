import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { projects } from "../../data/contents.ts";
import ScrollReveal from "../common/ScrollReveal.tsx";
import SectionHeader from "../common/SectionHeader.tsx";
import RetroBox from "../common/RetroBox.tsx";
import PageSection from "../common/PageSection.tsx";

const techStack = [
  "React.js",
  "Next.js",
  "Vue.js",
  "TypeScript",
  "Redux",
  "React Router",
  "Material UI",
  "Axios",
  "Node.js",
  "PostgreSQL",
];

const ProjectsSection: React.FC = () => (
  <PageSection>
    <SectionHeader
      label="Work"
      title="Featured Projects"
      subtitle="Recent builds showcasing full-stack skills, modern UI, and problem-solving."
    />

    <div className="section-divider" />

    <Grid container spacing={{ xs: 1.5, sm: 2 }} className="equal-height-grid" sx={{ mb: 2 }}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} lg={4} key={project.title} sx={{ display: "flex" }}>
          <ScrollReveal delay={index * 0.1} stretch>
            <Box className="project-brutal">
              <Box className="project-brutal__img">
                <img src={project.image} alt={project.title} />
              </Box>
              <Box className="project-brutal__body">
                <Typography
                  sx={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.1rem",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    mb: 1,
                    flexShrink: 0,
                  }}
                >
                  {project.title}
                </Typography>
                <Typography className="project-brutal__desc" component="p">
                  {project.description}
                </Typography>
                <Box className="project-brutal__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="brutal-chip brutal-chip--blue">
                      {tag}
                    </span>
                  ))}
                </Box>
                <Box className="project-brutal__actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutal-btn"
                    style={{ flex: 1, textAlign: "center" }}
                  >
                    GitHub
                  </a>
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutal-btn brutal-btn--pink"
                    style={{ flex: 1, textAlign: "center" }}
                  >
                    Live Demo
                  </a>
                </Box>
              </Box>
            </Box>
          </ScrollReveal>
        </Grid>
      ))}
    </Grid>

    <ScrollReveal>
      <RetroBox variant="yellow" sx={{ p: { xs: 2.5, md: 4 }, textAlign: "center", mt: 2 }}>
        <Typography
          sx={{
            fontFamily: "var(--font-display)",
            fontSize: "1.35rem",
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          Tech Stack
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center" }}>
          {techStack.map((tech) => (
            <span key={tech} className="brutal-chip">
              {tech}
            </span>
          ))}
        </Box>
      </RetroBox>
    </ScrollReveal>
  </PageSection>
);

export default ProjectsSection;
