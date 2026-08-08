import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import { Bio, experiences, projects, skills } from "../../data/contents.ts";
import ScrollReveal from "../common/ScrollReveal.tsx";
import mineAvatar from "../../assets/images/mine-avatar.png";
import { useResumeDialog } from "../resume/ResumeDialogProvider.tsx";

const technologyCount = skills.reduce((total, group) => total + group.skills.length, 0);

const stats = [
  { value: "3.7+", label: "Years experience" },
  { value: String(projects.length), label: "Projects shipped" },
  { value: String(experiences.length), label: "Companies" },
  { value: `${Math.floor(technologyCount / 5) * 5}+`, label: "Technologies" },
];

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

const BioSection: React.FC = () => {
  const { openResume } = useResumeDialog();

  return (
    <section id="about" className="hero">
      <div className="container">
        <div className="hero__grid">
          <ScrollReveal>
            <Typography component="h1" className="hero__title">
              {Bio.name.split(" ")[0].toLowerCase()}{" "}
              <span className="hero__title-accent">
                {Bio.name.split(" ").slice(1).join(" ").toLowerCase()}
              </span>
            </Typography>

            <Box className="hero__roles">
              <span className="chip chip--mono">📍 Bengaluru, IN</span>
              {Bio.roles.map((role) => (
                <span key={role} className="chip chip--mono">
                  {role}
                </span>
              ))}
            </Box>

            <Typography className="hero__desc">{Bio.description}</Typography>

            <Box className="hero__cta">
              <a href="#contact" className="btn btn--primary">
                <MailOutlineRoundedIcon sx={{ fontSize: 16 }} />
                Get in touch
              </a>
              <button type="button" className="btn btn--ghost" onClick={() => openResume()}>
                Resume
                <ArrowOutwardRoundedIcon sx={{ fontSize: 15 }} />
              </button>
              <a
                href={Bio.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                GitHub
                <ArrowOutwardRoundedIcon sx={{ fontSize: 15 }} />
              </a>
              <a
                href={Bio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                LinkedIn
                <ArrowOutwardRoundedIcon sx={{ fontSize: 15 }} />
              </a>
            </Box>
          </ScrollReveal>

          <ScrollReveal direction="scale" delay={0.1}>
            <Box className="hero__portrait">
              <Box className="hero__portrait-frame">
                <img src={mineAvatar} alt={Bio.name} />
              </Box>

              <svg
                className="hero__open-badge"
                viewBox="0 0 100 100"
                role="img"
                aria-label="Open to work"
              >
                <defs>
                  {/*
                    Circle center: (50,50), stroke centerline r=45.5 so the 9-wide
                    sash sits exactly on the photo edge.
                    8:00 (240° from 12): x=10.59, y=72.75
                    4:00 (120° from 12): x=89.41, y=72.75
                    Symmetric about 6 o'clock, so startOffset 50% centers the text.
                    sweep-flag=0 → counter-clockwise, i.e. around the bottom.
                  */}
                  <path
                    id="hero-open-path"
                    d="M 10.59,72.75 A 45.5,47.5 0 0 0 89.41,72.75"
                    fill="none"
                  />
                </defs>

                {/* Sash — painted on bottom edge of the photo */}
                <path
                  className="hero__open-sash"
                  d="M 10.59,72.75 A 47,46 0 0 0 82.41,82.75"
                  fill="none"
                  strokeLinecap="round"
                />

                {/* Text follows the arc centerline */}
                <text className="hero__open-text">
                  <textPath href="#hero-open-path" startOffset="50%" textAnchor="middle">
                    OPEN TO WORK
                  </textPath>
                </text>

                {/* Caps */}
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
