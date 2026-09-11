import React, { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import ScrollReveal from "../common/ScrollReveal.tsx";
import HeroBackground from "../hero/HeroBackground.tsx";
import ShowcaseTabs from "../showcase/ShowcaseTabs.tsx";
import mineAvatar from "../../assets/images/mine-avatar.png";
import { useResumeDialog } from "../resume/ResumeDialogProvider.tsx";
import { usePortfolioData } from "../../context/PortfolioDataContext.tsx";
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
  const reduceMotion = useReducedMotion();
  const { openResume } = useResumeDialog();
  const { profile, projects, experiences, skills } = usePortfolioData();

  const showcaseTabs = useMemo(
    () =>
      projects.data
        .filter((project): project is typeof project & { image: string } => Boolean(project.image))
        .slice(0, 3)
        .map((project) => ({
          id: String(project.id),
          label: project.title,
          title: project.title,
          description: project.description,
          image: project.image,
          href: project.webapp || undefined,
        })),
    [projects.data]
  );

  const bio = profile.data;
  const technologyCount = skills.data.reduce((total, group) => total + group.skills.length, 0);
  const stats = [
    { value: "3.7+", label: "Years experience" },
    { value: String(projects.data.length), label: "Projects shipped" },
    { value: String(experiences.data.length), label: "Companies" },
    { value: `${Math.floor(technologyCount / 5) * 5}+`, label: "Technologies" },
  ];

  const displayName = bio.name.toLowerCase();

  return (
    <section id="about" className="hero">
      <HeroBackground />
      <div className="container">
        <div className="hero__grid">
          <ScrollReveal>
            <motion.a
              href="#projects"
              className="hero__eyebrow-badge"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
            >
              <motion.span
                className="hero__eyebrow-dot"
                aria-hidden
                animate={{
                  scale: [1, 1.35, 1],
                  opacity: [1, 0.45, 1],
                  boxShadow: [
                    "0 0 10px rgba(198, 254, 30, 0.55)",
                    "0 0 16px rgba(198, 254, 30, 0.9)",
                    "0 0 10px rgba(198, 254, 30, 0.55)",
                  ],
                }}
                transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity }}
              />
              Open to work · Frontend &amp; Full Stack
            </motion.a>

            <Typography component="h1" className="hero__title">
              {displayName}
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

              <motion.svg
                className="hero__open-badge"
                viewBox="0 0 100 100"
                role="img"
                aria-label="Open to work"
                initial={reduceMotion ? false : { opacity: 0, rotate: -4 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              >
                <defs>
                  <path
                    id="hero-open-path"
                    d="M 10.59,72.75 A 45.5,47.5 0 0 0 89.41,72.75"
                    fill="none"
                  />
                </defs>

                <motion.path
                  className="hero__open-sash"
                  d="M 10.59,72.75 A 47,46 0 0 0 82.41,82.75"
                  fill="none"
                  strokeLinecap="round"
                  initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
                  animate={
                    reduceMotion
                      ? { pathLength: 1, opacity: 1 }
                      : { pathLength: 1, opacity: [0.7, 1, 0.7] }
                  }
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : {
                          pathLength: { duration: 1.25, ease: [0.22, 1, 0.36, 1], delay: 0.35 },
                          opacity: {
                            duration: 2.8,
                            ease: "easeInOut",
                            repeat: Infinity,
                            delay: 1.6,
                          },
                        }
                  }
                />

                <motion.g
                  initial={reduceMotion ? false : { opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: reduceMotion ? 0 : 1.1 }}
                >
                  <text className="hero__open-text">
                    <textPath href="#hero-open-path" startOffset="50%" textAnchor="middle">
                      OPEN TO WORK
                    </textPath>
                  </text>
                </motion.g>

                <motion.circle
                  className="hero__open-dot"
                  cx="10.59"
                  cy="72.75"
                  r="2.1"
                  animate={
                    reduceMotion
                      ? { opacity: 1 }
                      : { opacity: [1, 0.3, 1], scale: [1, 1.35, 1] }
                  }
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { duration: 2.2, ease: "easeInOut", repeat: Infinity, delay: 1.4 }
                  }
                  style={{ transformOrigin: "10.59px 72.75px", transformBox: "fill-box" }}
                />
                <motion.circle
                  className="hero__open-dot"
                  cx="82.41"
                  cy="82.75"
                  r="2.1"
                  animate={
                    reduceMotion
                      ? { opacity: 1 }
                      : { opacity: [1, 0.3, 1], scale: [1, 1.35, 1] }
                  }
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { duration: 2.2, ease: "easeInOut", repeat: Infinity, delay: 2.5 }
                  }
                  style={{ transformOrigin: "82.41px 82.75px", transformBox: "fill-box" }}
                />
              </motion.svg>
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

        {showcaseTabs.length > 0 && (
          <ScrollReveal delay={0.2}>
            <ShowcaseTabs tabs={showcaseTabs} />
          </ScrollReveal>
        )}

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
