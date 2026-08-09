import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import ScrollReveal from "../common/ScrollReveal.tsx";
import mineAvatar from "../../assets/images/mine-avatar.png";
import { useResumeDialog } from "../resume/ResumeDialogProvider.tsx";
import { usePortfolioData } from "../../context/PortfolioDataContext.tsx";
import { BioSkeleton } from "../skeletons/index.tsx";

const focusAreas = [
  {
    icon: <DesignServicesOutlinedIcon sx={{ fontSize: 20 }} />,
    title: "Frontend engineering",
    desc: "Scalable React, Next.js, and Vue interfaces built on reusable component systems.",
  },
  {
    icon: <LayersOutlinedIcon sx={{ fontSize: 20 }} />,
    title: "Full-stack delivery",
    desc: "End-to-end features with Node.js, Express, Firebase, and REST API integration.",
  },
  {
    icon: <SpeedOutlinedIcon sx={{ fontSize: 20 }} />,
    title: "Performance & quality",
    desc: "Jest coverage, SonarQube hygiene, and rendering optimizations that ship clean.",
  },
];

const shortLocation = (location: string | null) => {
  if (!location) return "Bengaluru, IN";
  if (/bangalore|bengaluru/i.test(location)) return "Bengaluru, IN";
  return location;
};

const BioSection: React.FC = () => {
  const { openResume } = useResumeDialog();
  const { profile, projects, experiences, skills } = usePortfolioData();

  if (profile.isLoading) {
    return <BioSkeleton />;
  }

  const bio = profile.data;
  const technologyCount = skills.data.reduce((total, group) => total + group.skills.length, 0);
  const stats = [
    { value: "3.7+", label: "Years experience" },
    { value: String(projects.data.length), label: "Projects shipped" },
    { value: String(experiences.data.length), label: "Companies" },
    { value: `${Math.floor(technologyCount / 5) * 5}+`, label: "Technologies" },
  ];

  const nameParts = bio.name.trim().split(/\s+/);
  const firstName = (nameParts[0] || "").toLowerCase();
  const restName = nameParts.slice(1).join(" ").toLowerCase();

  return (
    <section id="about" className="hero">
      <div className="container">
        <div className="hero__grid">
          <ScrollReveal>
            <Typography component="h1" className="hero__title">
              {firstName}{" "}
              <span className="hero__title-accent">{restName}</span>
            </Typography>

            <Box className="hero__roles">
              <span className="chip chip--mono">📍 {shortLocation(bio.location)}</span>
              {bio.roles.map((role) => (
                <span key={role} className="chip chip--mono">
                  {role}
                </span>
              ))}
            </Box>

            <Typography className="hero__desc">{bio.description}</Typography>

            <Box className="hero__cta">
              <a href="#contact" className="btn btn--primary">
                <MailOutlineRoundedIcon sx={{ fontSize: 16 }} />
                Get in touch
              </a>
              <button type="button" className="btn btn--ghost" onClick={() => openResume()}>
                Resume
                <ArrowOutwardRoundedIcon sx={{ fontSize: 15 }} />
              </button>
              {bio.github && (
                <a
                  href={bio.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--ghost"
                >
                  GitHub
                  <ArrowOutwardRoundedIcon sx={{ fontSize: 15 }} />
                </a>
              )}
              {bio.linkedin && (
                <a
                  href={bio.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--ghost"
                >
                  LinkedIn
                  <ArrowOutwardRoundedIcon sx={{ fontSize: 15 }} />
                </a>
              )}
            </Box>
          </ScrollReveal>

          <ScrollReveal direction="scale" delay={0.1}>
            <Box className="hero__portrait">
              <Box className="hero__portrait-frame">
                <img src={mineAvatar} alt={bio.name} loading="eager" />
              </Box>

              <svg
                className="hero__open-badge"
                viewBox="0 0 100 100"
                role="img"
                aria-label="Open to work"
              >
                <defs>
                  <path
                    id="hero-open-path"
                    d="M 10.59,72.75 A 45.5,47.5 0 0 0 89.41,72.75"
                    fill="none"
                  />
                </defs>

                <path
                  className="hero__open-sash"
                  d="M 10.59,72.75 A 47,46 0 0 0 82.41,82.75"
                  fill="none"
                  strokeLinecap="round"
                />

                <text className="hero__open-text">
                  <textPath href="#hero-open-path" startOffset="50%" textAnchor="middle">
                    OPEN TO WORK
                  </textPath>
                </text>

                <circle className="hero__open-dot" cx="10.59" cy="72.75" r="2.1" />
                <circle className="hero__open-dot" cx="82.41" cy="82.75" r="2.1" />
              </svg>
            </Box>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.15}>
          <Box className="stats">
            {stats.map((stat) => (
              <Box key={stat.label} className="stat">
                <Typography className="stat__value">{stat.value}</Typography>
                <Typography className="stat__label">{stat.label}</Typography>
              </Box>
            ))}
          </Box>
        </ScrollReveal>

        <Box sx={{ mt: { xs: 5, md: 8 } }}>
          <ScrollReveal>
            <Typography className="eyebrow" sx={{ mb: 2.5 }}>
              What I do
            </Typography>
          </ScrollReveal>

          <div className="focus-grid">
            {focusAreas.map((area, index) => (
              <ScrollReveal key={area.title} delay={index * 0.08} stretch>
                <Box className="card card--hover focus-card">
                  <Box className="focus-card__icon">{area.icon}</Box>
                  <Typography className="card-title" sx={{ fontSize: "1rem", mb: 0.85 }}>
                    {area.title}
                  </Typography>
                  <Typography className="body-text">{area.desc}</Typography>
                </Box>
              </ScrollReveal>
            ))}
          </div>
        </Box>
      </div>
    </section>
  );
};

export default BioSection;
