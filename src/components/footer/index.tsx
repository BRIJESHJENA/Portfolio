import React from "react";
import { Bio } from "../../data/contents.ts";
import { useResumeDialog } from "../resume/ResumeDialogProvider.tsx";

const links = [
  { label: "GitHub", href: Bio.github },
  { label: "LinkedIn", href: Bio.linkedin },
  { label: "Email", href: `mailto:${Bio.email}` },
];

const Footer: React.FC = () => {
  const { openResume } = useResumeDialog();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__note">
          © {new Date().getFullYear()} {Bio.name.toLowerCase()} · Built with React &amp;
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
