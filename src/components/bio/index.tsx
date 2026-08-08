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

const BioSection: React.FC = () => (
  <section id="about" className="hero">
    <div className="container">
      <div className="hero__grid">
        <ScrollReveal>
          <Box className="hero__status">
            <span className="status-dot" />
            Available for new opportunities
          </Box>

          <Typography component="h1" className="hero__title">
            {Bio.name.split(" ")[0].toLowerCase()}{" "}
            <span className="hero__title-accent">
              {Bio.name.split(" ").slice(1).join(" ").toLowerCase()}
            </span>
          </Typography>

          <Box className="hero__roles">
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
            <a
              href={Bio.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              Resume
              <ArrowOutwardRoundedIcon sx={{ fontSize: 15 }} />
            </a>
            <a href={Bio.github} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
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
            <img src={mineAvatar} alt={Bio.name} />
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

export default BioSection;
