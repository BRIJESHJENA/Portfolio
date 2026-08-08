import React from "react";
import { Bio } from "../../data/contents.ts";

const links = [
  { label: "GitHub", href: Bio.github },
  { label: "LinkedIn", href: Bio.linkedin },
  { label: "Resume", href: Bio.resume },
  { label: "Email", href: `mailto:${Bio.email}` },
];

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container footer__inner">
      <span className="footer__note">
        © {new Date().getFullYear()} {Bio.name.toLowerCase()} · Built with React &amp; TypeScript
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
      </nav>
    </div>
  </footer>
);

export default Footer;
