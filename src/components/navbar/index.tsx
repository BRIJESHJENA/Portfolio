import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Bio } from "../../data/contents.ts";
import { useResumeDialog } from "../resume/ResumeDialogProvider.tsx";

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  // { id: "memes", label: "Memes" },
  { id: "contact", label: "Contact" },
];

/** Module-level so the observer effect isn't re-run on every render. */
export const SECTION_IDS = NAV_LINKS.map((link) => link.id);

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  activeId: string;
}

const initials = Bio.name
  .split(" ")
  .map((part) => part[0])
  .join("")
  .slice(0, 2);

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, onToggleTheme, activeId }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openResume } = useResumeDialog();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`.trim()}>
        <div className="container navbar__inner">
          <a href="#about" className="navbar__brand" onClick={() => setMenuOpen(false)}>
            <span className="navbar__mark">{initials}</span>
            <span>{Bio.name.toLowerCase()}</span>
          </a>

          <nav className="navbar__links" aria-label="Section navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link ${activeId === link.id ? "active" : ""}`.trim()}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="navbar__actions">
            <button
              type="button"
              className="icon-btn"
              onClick={onToggleTheme}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <LightModeOutlinedIcon sx={{ fontSize: 18 }} />
              ) : (
                <DarkModeOutlinedIcon sx={{ fontSize: 18 }} />
              )}
            </button>

            <button
              type="button"
              className="btn btn--primary btn--sm navbar__cta"
              onClick={() => openResume()}
            >
              Resume
            </button>

            <button
              type="button"
              className="icon-btn navbar__burger"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <CloseRoundedIcon sx={{ fontSize: 20 }} />
              ) : (
                <MenuRoundedIcon sx={{ fontSize: 20 }} />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="container">
              <div className="mobile-menu__list">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={`mobile-menu__link ${activeId === link.id ? "active" : ""}`.trim()}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mobile-menu__cta">
                  <button
                    type="button"
                    className="btn btn--primary"
                    onClick={() => {
                      setMenuOpen(false);
                      openResume();
                    }}
                  >
                    Resume
                  </button>
                  <a href={`mailto:${Bio.email}`} className="btn btn--ghost">
                    Say hello
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
