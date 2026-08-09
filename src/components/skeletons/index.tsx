import React from "react";
import { Box } from "@mui/material";
import PageSection from "../common/PageSection.tsx";
import SectionHeader from "../common/SectionHeader.tsx";

const Bone: React.FC<{ className?: string; style?: React.CSSProperties }> = ({
  className = "",
  style,
}) => <span className={`skeleton-bone ${className}`.trim()} style={style} aria-hidden />;

export const BioSkeleton: React.FC = () => (
  <section id="about" className="hero" aria-busy="true" aria-label="Loading about">
    <div className="container">
      <div className="hero__grid">
        <div>
          <Bone style={{ width: "70%", height: 48, marginBottom: 20 }} />
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
            <Bone style={{ width: 110, height: 28, borderRadius: 999 }} />
            <Bone style={{ width: 140, height: 28, borderRadius: 999 }} />
            <Bone style={{ width: 150, height: 28, borderRadius: 999 }} />
          </div>
          <Bone style={{ width: "100%", height: 16, marginBottom: 10 }} />
          <Bone style={{ width: "95%", height: 16, marginBottom: 10 }} />
          <Bone style={{ width: "80%", height: 16, marginBottom: 28 }} />
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Bone style={{ width: 130, height: 40, borderRadius: 999 }} />
            <Bone style={{ width: 110, height: 40, borderRadius: 999 }} />
            <Bone style={{ width: 100, height: 40, borderRadius: 999 }} />
          </div>
        </div>
        <div className="hero__portrait">
          <Bone className="skeleton-portrait" />
        </div>
      </div>

      <div className="stats" style={{ marginTop: 40 }}>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="stat">
            <Bone style={{ width: 56, height: 32, marginBottom: 8 }} />
            <Bone style={{ width: 90, height: 14 }} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ExperienceSkeleton: React.FC = () => (
  <PageSection id="experience">
    <SectionHeader
      label="Career"
      title="Experience"
      subtitle="Roles where I've shipped production software — from frontend craft to full-stack delivery."
    />
    <Box className="timeline" aria-busy="true" aria-label="Loading experience">
      {[0, 1].map((i) => (
        <Box key={i} className="timeline__item">
          <span className="timeline__dot" />
          <Box className="card exp-card">
            <Box className="exp-card__head">
              <Bone style={{ width: 48, height: 48, borderRadius: 10, flexShrink: 0 }} />
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Bone style={{ width: "55%", height: 18, marginBottom: 8 }} />
                <Bone style={{ width: "35%", height: 14 }} />
              </Box>
              <Bone style={{ width: 120, height: 28, borderRadius: 999 }} />
            </Box>
            <Box sx={{ mt: 2, display: "grid", gap: 1 }}>
              <Bone style={{ width: "100%", height: 12 }} />
              <Bone style={{ width: "92%", height: 12 }} />
              <Bone style={{ width: "88%", height: 12 }} />
            </Box>
            <Box className="tag-row" sx={{ mt: 2 }}>
              {[90, 70, 80, 100, 75].map((w, j) => (
                <Bone key={j} style={{ width: w, height: 26, borderRadius: 999 }} />
              ))}
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  </PageSection>
);

export const ProjectsSkeleton: React.FC = () => (
  <PageSection id="projects">
    <SectionHeader
      label="Work"
      title="Selected projects"
      subtitle="Production SaaS platforms and personal builds — from creator CMS to interactive tooling."
    />
    <div className="project-grid" aria-busy="true" aria-label="Loading projects">
      {[0, 1, 2].map((i) => (
        <Box key={i} className="card project-card">
          <Bone className="skeleton-project-media" />
          <Box className="project-card__body">
            <Bone style={{ width: "60%", height: 20, marginBottom: 12 }} />
            <Bone style={{ width: "100%", height: 12, marginBottom: 8 }} />
            <Bone style={{ width: "90%", height: 12, marginBottom: 8 }} />
            <Bone style={{ width: "70%", height: 12, marginBottom: 16 }} />
            <Box className="tag-row">
              {[70, 80, 60].map((w, j) => (
                <Bone key={j} style={{ width: w, height: 26, borderRadius: 999 }} />
              ))}
            </Box>
          </Box>
        </Box>
      ))}
    </div>
  </PageSection>
);

export const SkillsSkeleton: React.FC = () => (
  <PageSection id="skills">
    <SectionHeader
      label="Toolkit"
      title="Skills & tools"
      subtitle="The technologies I reach for when building fast, maintainable web applications."
    />
    <div className="skills-grid" aria-busy="true" aria-label="Loading skills">
      {[0, 1, 2, 3].map((i) => (
        <Box key={i} className="card skill-card">
          <Bone style={{ width: "50%", height: 16, marginBottom: 16 }} />
          <Box className="skill-card__list">
            {[100, 120, 90, 110, 95].map((w, j) => (
              <Bone key={j} style={{ width: w, height: 34, borderRadius: 999 }} />
            ))}
          </Box>
        </Box>
      ))}
    </div>
  </PageSection>
);

export const EducationSkeleton: React.FC = () => (
  <PageSection id="education">
    <SectionHeader label="Background" title="Education" />
    <Box className="edu-list" aria-busy="true" aria-label="Loading education">
      {[0, 1, 2].map((i) => (
        <Box key={i} className="card edu-row">
          <Bone style={{ width: 48, height: 48, borderRadius: 10, flexShrink: 0 }} />
          <Box sx={{ flex: 1, minWidth: 200 }}>
            <Bone style={{ width: "55%", height: 16, marginBottom: 8 }} />
            <Bone style={{ width: "40%", height: 14 }} />
          </Box>
          <Bone style={{ width: 100, height: 28, borderRadius: 999 }} />
        </Box>
      ))}
    </Box>
  </PageSection>
);

export const ContactSkeleton: React.FC = () => (
  <PageSection id="contact">
    <SectionHeader
      label="Contact"
      title="Let's work together"
      subtitle="Have a role, a project, or just want to talk shop? My inbox is always open."
    />
    <div className="contact-grid" aria-busy="true" aria-label="Loading contact">
      <Box className="card contact-info">
        {[0, 1, 2].map((i) => (
          <Box key={i} className="contact-row" sx={{ mb: 2 }}>
            <Bone style={{ width: 36, height: 36, borderRadius: 10, flexShrink: 0 }} />
            <Box sx={{ flex: 1 }}>
              <Bone style={{ width: 60, height: 10, marginBottom: 8 }} />
              <Bone style={{ width: "70%", height: 16 }} />
            </Box>
          </Box>
        ))}
      </Box>
      <Box className="card contact-form">
        <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" } }}>
          <Bone style={{ width: "100%", height: 48, borderRadius: 10 }} />
          <Bone style={{ width: "100%", height: 48, borderRadius: 10 }} />
        </Box>
        <Bone style={{ width: "100%", height: 120, borderRadius: 10, marginTop: 16 }} />
        <Bone style={{ width: 140, height: 40, borderRadius: 999, marginTop: 20 }} />
      </Box>
    </div>
  </PageSection>
);

/** Generic fallback while a lazy section chunk downloads. */
export const SectionChunkFallback: React.FC<{ id?: string }> = ({ id }) => (
  <section id={id} className="page-section" aria-busy="true">
    <div className="container">
      <Bone style={{ width: 80, height: 12, marginBottom: 12 }} />
      <Bone style={{ width: 220, height: 32, marginBottom: 24 }} />
      <Bone style={{ width: "100%", height: 180, borderRadius: 12 }} />
    </div>
  </section>
);
