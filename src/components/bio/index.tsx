import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { Bio } from "../../data/contents.ts";
import ScrollReveal from "../common/ScrollReveal.tsx";
import SectionHeader from "../common/SectionHeader.tsx";
import RetroBox from "../common/RetroBox.tsx";
import PageSection from "../common/PageSection.tsx";

const services = [
  {
    emoji: "🎨",
    title: "Web Design",
    desc: "Bold, accessible interfaces with neo-brutalist flair and pixel-perfect detail.",
    variant: "yellow" as const,
  },
  {
    emoji: "💻",
    title: "Full Stack",
    desc: "End-to-end apps with React, Node.js, and modern tooling from idea to deploy.",
    variant: "blue" as const,
  },
  {
    emoji: "⚡",
    title: "UI/UX",
    desc: "Motion-rich experiences with scroll animations and delightful micro-interactions.",
    variant: "pink" as const,
  },
];

const BioSection: React.FC = () => (
  <PageSection id="bio" sx={{ pt: { xs: 1, sm: 2 } }}>
    <ScrollReveal direction="scale">
      <Box className="hero-banner" sx={{ p: { xs: 2, sm: 3, md: 4, lg: 5 }, mb: { xs: 3, md: 4 }, textAlign: "center" }}>
        <Typography className="hero-title" component="h1">
          {Bio.name}
        </Typography>
        <Box sx={{ mt: { xs: 1.5, md: 2 } }}>
          <Typography className="hero-role" component="span">
            {Bio.roles[0]}
          </Typography>
        </Box>
        <Typography
          className="hero-banner__desc"
          sx={{
            mt: { xs: 2, md: 3 },
            maxWidth: 560,
            mx: "auto",
            fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.1rem" },
            lineHeight: 1.7,
            fontWeight: 500,
            px: { xs: 0.5, sm: 0 },
          }}
        >
          {Bio.description}
        </Typography>
        <Box className="hero-cta">
          <a href={Bio.github} target="_blank" rel="noopener noreferrer" className="brutal-btn">
            GitHub
          </a>
          <a href={Bio.linkedin} target="_blank" rel="noopener noreferrer" className="brutal-btn brutal-btn--blue">
            LinkedIn
          </a>
          <a href={Bio.resume} target="_blank" rel="noopener noreferrer" className="brutal-btn brutal-btn--white">
            Resume
          </a>
        </Box>
      </Box>
    </ScrollReveal>

    <SectionHeader
      label="What I do"
      title="Build Things That Pop"
      subtitle="Design meets code — shipping products with personality, performance, and polish."
    />

    <Grid container spacing={{ xs: 1.5, sm: 2 }} className="equal-height-grid" sx={{ mb: { xs: 3, md: 5 } }}>
      {services.map((item, i) => (
        <Grid item xs={12} sm={6} md={4} key={item.title} sx={{ display: "flex" }}>
          <ScrollReveal delay={i * 0.1} direction="up" stretch>
            <RetroBox
              variant={item.variant}
              sx={{ p: { xs: 2, sm: 2.5, md: 3 }, width: "100%", flex: 1, display: "flex", flexDirection: "column" }}
            >
              <Typography sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, mb: 1 }}>{item.emoji}</Typography>
              <Typography
                sx={{
                  fontFamily: "var(--font-display)",
                  fontSize: { xs: "0.95rem", md: "1.1rem" },
                  fontWeight: 900,
                  textTransform: "uppercase",
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>
              <Typography sx={{ fontSize: { xs: "0.85rem", md: "0.9rem" }, lineHeight: 1.6, fontWeight: 500, flex: 1 }}>
                {item.desc}
              </Typography>
            </RetroBox>
          </ScrollReveal>
        </Grid>
      ))}
    </Grid>

    <ScrollReveal>
      <RetroBox variant="white" sx={{ p: { xs: 2, sm: 3, md: 4 }, textAlign: "center" }}>
        <Typography
          sx={{
            fontFamily: "var(--font-display)",
            fontSize: { xs: "1.2rem", md: "1.5rem" },
            textTransform: "uppercase",
            mb: { xs: 2, md: 3 },
          }}
        >
          Get In Touch
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, alignItems: "center" }}>
          {[
            { label: "Email", value: Bio.email },
            { label: "Phone", value: Bio.phone },
            { label: "Location", value: Bio.location },
          ].map((row) => (
            <Box
              key={row.label}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: 0.5, sm: 2 },
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <span className="brutal-chip brutal-chip--yellow">{row.label}</span>
              <Typography sx={{ fontWeight: 600, fontSize: { xs: "0.85rem", sm: "1rem" }, wordBreak: "break-word" }}>
                {row.value}
              </Typography>
            </Box>
          ))}
        </Box>
      </RetroBox>
    </ScrollReveal>
  </PageSection>
);

export default BioSection;
