import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { deliveredMeme, inviteMeme } from "../../data/memes.ts";
import ScrollReveal from "../common/ScrollReveal.tsx";
import SectionHeader from "../common/SectionHeader.tsx";
import PageSection from "../common/PageSection.tsx";
import { postContact } from "../../api/portfolio.ts";
import { ApiError } from "../../api/client.ts";
import { usePortfolioData } from "../../context/PortfolioDataContext.tsx";
type FormStatus = "idle" | "submitting" | "success" | "error";

const Contact: React.FC = () => {
  const { profile } = usePortfolioData();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const bio = profile.data;
  const availability =
    bio.availability?.length > 0
      ? bio.availability
      : ["Open to full-time", "Freelance", "Remote"];

  const update = (field: keyof typeof form) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [field]: event.target.value });
    if (status !== "idle" && status !== "submitting") {
      setStatus("idle");
      setErrorMessage(null);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    try {
      await postContact({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      });
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      const message =
        err instanceof ApiError
          ? err.message
          : "Couldn’t send your message. Please try again or email me directly.";
      setErrorMessage(message);
      setStatus("error");
    }
  };

  const contactRows = [
    {
      icon: <MailOutlineRoundedIcon sx={{ fontSize: 17 }} />,
      label: "Email",
      value: bio.email,
      href: `mailto:${bio.email}`,
    },
    bio.phone
      ? {
          icon: <PhoneOutlinedIcon sx={{ fontSize: 17 }} />,
          label: "Phone",
          value: String(bio.phone),
          href: `tel:${bio.phone}`,
        }
      : null,
    bio.location
      ? {
          icon: <PlaceOutlinedIcon sx={{ fontSize: 17 }} />,
          label: "Location",
          value: bio.location,
          href: undefined as string | undefined,
        }
      : null,
  ].filter(Boolean) as Array<{
    icon: React.ReactNode;
    label: string;
    value: string;
    href?: string;
  }>;

  const statusText =
    status === "submitting"
      ? "Sending…"
      : status === "success"
        ? "Message sent — thanks for reaching out."
        : status === "error"
          ? errorMessage || "Something went wrong."
          : "No spam, I promise.";

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
                  maxLength={200}
                  disabled={status === "submitting"}
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
                  maxLength={320}
                  disabled={status === "submitting"}
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
                maxLength={5000}
                disabled={status === "submitting"}
              />
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2.5, flexWrap: "wrap" }}>
              <button
                type="submit"
                className="btn btn--primary"
                disabled={status === "submitting"}
              >
                <SendRoundedIcon sx={{ fontSize: 15 }} />
                {status === "submitting" ? "Sending…" : "Send message"}
              </button>
              <span
                className={`form-status ${
                  status === "success"
                    ? "form-status--sent"
                    : status === "error"
                      ? "form-status--error"
                      : ""
                }`.trim()}
              >
                {statusText}
              </span>
            </Box>

            {status === "success" && (
              <Box className="meme-inline meme-inline--wide" sx={{ mt: 2.5 }}>
                <Typography className="meme-inline__label">{deliveredMeme.situation}</Typography>
                <img src={deliveredMeme.image} alt={deliveredMeme.alt} loading="lazy" />
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
