import React, { useEffect, useMemo, useState } from "react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import Navbar, { SECTION_IDS } from "./components/navbar/index.tsx";
import MemeFloat from "./components/memes/MemeFloat.tsx";
import useActiveSection from "./hooks/useActiveSection.ts";
import BioSection from "./components/bio/index.tsx";
import ExperienceSection from "./components/experience/index.tsx";
import ProjectsSection from "./components/project/index.tsx";
import SkillsSection from "./components/skills/index.tsx";
import EducationSection from "./components/education/index.tsx";
// import MemesSection from "./components/memes/index.tsx";
import Contact from "./components/contact/index.tsx";
import Footer from "./components/footer/index.tsx";
import "./App.css";

const THEME_KEY = "portfolio-theme";

const getInitialTheme = () => {
  if (typeof window === "undefined") return true;
  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored) return stored === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);
  const [showToTop, setShowToTop] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    window.localStorage.setItem(THEME_KEY, isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    const onScroll = () => setShowToTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? "dark" : "light",
          primary: { main: isDarkMode ? "#8b8bf5" : "#6366f1" },
          background: {
            default: isDarkMode ? "#09090b" : "#ffffff",
            paper: isDarkMode ? "#111114" : "#ffffff",
          },
          text: {
            primary: isDarkMode ? "#fafafa" : "#0b0b0d",
            secondary: isDarkMode ? "#a1a1aa" : "#6b7280",
          },
        },
        typography: {
          fontFamily: '"Inter", "Segoe UI", sans-serif',
        },
        shape: { borderRadius: 12 },
        breakpoints: { values: { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200 } },
      }),
    [isDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app-root">
        <div className="app-glow" aria-hidden />

        <Navbar
          isDarkMode={isDarkMode}
          onToggleTheme={() => setIsDarkMode((prev) => !prev)}
          activeId={activeId}
        />

        <main>
          <BioSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          {/* <MemesSection /> */}
          <Contact />
        </main>

        <Footer />

        <MemeFloat activeId={activeId} />

        {showToTop && (
          <button
            type="button"
            className="to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
          >
            <KeyboardArrowUpRoundedIcon sx={{ fontSize: 22 }} />
          </button>
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
