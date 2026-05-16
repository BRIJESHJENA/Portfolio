import React, { useState } from "react";
import { Typography, Box, TextField, Grid } from "@mui/material";
import { Bio } from "../../data/contents.ts";
import ScrollReveal from "../common/ScrollReveal.tsx";
import SectionHeader from "../common/SectionHeader.tsx";
import RetroBox from "../common/RetroBox.tsx";
import PageSection from "../common/PageSection.tsx";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [field]: event.target.value });
    };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      alert("Thank you for your message! I will get back to you soon.");
    }, 1500);
  };

  return (
    <PageSection sx={{ pb: { xs: 4, md: 6 } }}>
      <SectionHeader
        label="Say hello"
        title="Get In Touch"
        subtitle="Open to freelance, full-time, and remote opportunities. Let's build something bold."
      />

      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item xs={12} md={5}>
          <ScrollReveal direction="left">
            <RetroBox variant="pink" sx={{ p: 3, height: "100%" }}>
              <Typography
                sx={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  textTransform: "uppercase",
                  mb: 3,
                }}
              >
                Let's Connect
              </Typography>

              {[
                { icon: "📧", label: "Email", value: Bio.email, href: `mailto:${Bio.email}` },
                { icon: "📱", label: "Phone", value: Bio.phone, href: `tel:${Bio.phone}` },
                { icon: "📍", label: "Location", value: Bio.location },
              ].map((row) => (
                <Box key={row.label} sx={{ mb: 2 }}>
                  <span className="brutal-chip brutal-chip--yellow">{row.icon} {row.label}</span>
                  {row.href ? (
                    <Typography
                      component="a"
                      href={row.href}
                      sx={{
                        display: "block",
                        mt: 0.75,
                        fontWeight: 600,
                        color: "inherit",
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      {row.value}
                    </Typography>
                  ) : (
                    <Typography sx={{ mt: 0.75, fontWeight: 600 }}>{row.value}</Typography>
                  )}
                </Box>
              ))}

              <Box sx={{ mt: 3, display: "flex", gap: 1, flexWrap: "wrap" }}>
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
            </RetroBox>
          </ScrollReveal>
        </Grid>

        <Grid item xs={12} md={7}>
          <ScrollReveal direction="right" delay={0.1}>
            <RetroBox variant="white" sx={{ p: 3 }}>
              <Typography
                sx={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  textTransform: "uppercase",
                  mb: 3,
                  textAlign: "center",
                }}
              >
                Send Message
              </Typography>

              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
              >
                {(["name", "email"] as const).map((field) => (
                  <TextField
                    key={field}
                    label={field.charAt(0).toUpperCase() + field.slice(1)}
                    variant="outlined"
                    type={field === "email" ? "email" : "text"}
                    value={formData[field]}
                    onChange={handleInputChange(field)}
                    required
                    className="brutal-input"
                    fullWidth
                  />
                ))}
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={formData.message}
                  onChange={handleInputChange("message")}
                  required
                  className="brutal-input"
                  fullWidth
                />
                <button type="submit" className="brutal-btn" disabled={isSubmitting} style={{ width: "100%", fontSize: "1rem", padding: "0.85rem" }}>
                  {isSubmitting ? "Sending..." : "Send Message →"}
                </button>
              </Box>
            </RetroBox>
          </ScrollReveal>
        </Grid>
      </Grid>

      <ScrollReveal delay={0.2}>
        <RetroBox variant="purple" sx={{ p: 4, mt: 3, textAlign: "center" }}>
          <Typography
            sx={{
              fontFamily: "var(--font-display)",
              fontSize: "1.25rem",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            Ready to Collaborate?
          </Typography>
          <Typography sx={{ maxWidth: 520, mx: "auto", mb: 2, fontWeight: 500, lineHeight: 1.65 }}>
            Always open to discussing new opportunities, interesting projects, or a chat about tech.
          </Typography>
          <Box sx={{ display: "flex", gap: 1, justifyContent: "center", flexWrap: "wrap" }}>
            {["Available for Freelance", "Open to Full-time", "Remote Work"].map((tag) => (
              <span key={tag} className="brutal-chip brutal-chip--yellow">
                {tag}
              </span>
            ))}
          </Box>
        </RetroBox>
      </ScrollReveal>
    </PageSection>
  );
};

export default Contact;
