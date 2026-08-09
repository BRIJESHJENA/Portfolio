import React from "react";
import { useResumeDialog } from "../resume/ResumeDialogProvider.tsx";
import { usePortfolioData } from "../../context/PortfolioDataContext.tsx";

const Footer: React.FC = () => {
  const { openResume } = useResumeDialog();
  const { profile } = usePortfolioData();
  const bio = profile.data;

  const links = [
    bio.github ? { label: "GitHub", href: bio.github } : null,
    bio.linkedin ? { label: "LinkedIn", href: bio.linkedin } : null,
    { label: "Email", href: `mailto:${bio.email}` },
  ].filter(Boolean) as Array<{ label: string; href: string }>;

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__note">
          © {new Date().getFullYear()} {bio.name.toLowerCase()} · Built with React &amp;
          TypeScript
        </span>
        <nav className="footer__links" aria-label="Social links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="footer__link"
            >
              {link.label}
            </a>
          ))}
          <button type="button" className="footer__link" onClick={() => openResume()}>
            Resume
          </button>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
