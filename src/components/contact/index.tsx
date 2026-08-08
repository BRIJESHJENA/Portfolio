import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { Bio } from "../../data/contents.ts";
import { deliveredMeme, inviteMeme } from "../../data/memes.ts";
import ScrollReveal from "../common/ScrollReveal.tsx";
import SectionHeader from "../common/SectionHeader.tsx";
import PageSection from "../common/PageSection.tsx";

const availability = ["Open to full-time", "Freelance", "Remote"];

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (field: keyof typeof form) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [field]: event.target.value });
    setSent(false);
  };

  // No backend here — hand the draft off to the visitor's mail client.
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${Bio.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const contactRows = [
    {
      icon: <MailOutlineRoundedIcon sx={{ fontSize: 17 }} />,
      label: "Email",
      value: Bio.email,
      href: `mailto:${Bio.email}`,
    },
    {
      icon: <PhoneOutlinedIcon sx={{ fontSize: 17 }} />,
      label: "Phone",
      value: String(Bio.phone),
      href: `tel:${Bio.phone}`,
    },
    {
      icon: <PlaceOutlinedIcon sx={{ fontSize: 17 }} />,
      label: "Location",
      value: Bio.location,
      href: undefined,
    },
  ];

  return (
    <PageSection id="contact">
      <SectionHeader
        label="Contact"
        title="Let's work together"
        subtitle="Have a role, a project, or just want to talk shop? My inbox is always open."
      />

      <div className="contact-grid">
        <ScrollReveal>
          <Box className="card contact-info">
            {contactRows.map((row) => {
              const content = (
                <>
                  <span className="contact-row__icon">{row.icon}</span>
                  <Box sx={{ minWidth: 0 }}>
                    <Typography
                      sx={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.65rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--text-faint)",
                      }}
                    >
                      {row.label}
                    </Typography>
                    <Typography sx={{ fontSize: "0.9rem", fontWeight: 500, wordBreak: "break-word" }}>
                      {row.value}
                    </Typography>
                  </Box>
                </>
              );

              return row.href ? (
                <a key={row.label} href={row.href} className="contact-row">
                  {content}
                </a>
              ) : (
                <Box key={row.label} className="contact-row">
                  {content}
                </Box>
              );
            })}

            <Box className="tag-row" sx={{ mt: 3 }}>
              {availability.map((item) => (
                <span key={item} className="chip chip--accent">
                  {item}
                </span>
              ))}
            </Box>
          </Box>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Box component="form" className="card contact-form" onSubmit={handleSubmit}>
            <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" } }}>
              <Box className="field">
                <label className="field__label" htmlFor="contact-name">
                  Name
                </label>
                <input
                  id="contact-name"
                  className="field__input"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Your name"
                  required
                />
              </Box>
              <Box className="field">
                <label className="field__label" htmlFor="contact-email">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className="field__input"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@example.com"
                  required
                />
              </Box>
            </Box>

            <Box className="field" sx={{ mt: 2 }}>
              <label className="field__label" htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                className="field__textarea"
                value={form.message}
                onChange={update("message")}
                placeholder="Tell me about the role or project…"
                required
              />
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2.5, flexWrap: "wrap" }}>
              <button type="submit" className="btn btn--primary">
                <SendRoundedIcon sx={{ fontSize: 15 }} />
                Send message
              </button>
              <span className={`form-status ${sent ? "form-status--sent" : ""}`.trim()}>
                {sent ? "Opening your mail app — thanks for reaching out." : "No spam, I promise."}
              </span>
            </Box>

            {sent && (
              <Box className="meme-inline meme-inline--wide" sx={{ mt: 2.5 }}>
                <Typography className="meme-inline__label">{deliveredMeme.situation}</Typography>
                <img src={deliveredMeme.image} alt={deliveredMeme.alt} />
              </Box>
            )}
          </Box>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.2}>
        <Box className="meme-signoff">
          <Typography className="meme-inline__label">{inviteMeme.situation}</Typography>
          <img src={inviteMeme.image} alt={inviteMeme.alt} loading="lazy" />
        </Box>
      </ScrollReveal>
    </PageSection>
  );
};

export default Contact;
