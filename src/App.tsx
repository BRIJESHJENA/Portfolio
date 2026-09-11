import React, { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import Navbar, { SECTION_IDS } from "./components/navbar/index.tsx";
import MemeFloat from "./components/memes/MemeFloat.tsx";
import useActiveSection from "./hooks/useActiveSection.ts";
import BioSection from "./components/bio/index.tsx";
import Footer from "./components/footer/index.tsx";
import { ResumeDialogProvider } from "./components/resume/ResumeDialogProvider.tsx";
import { PortfolioDataProvider } from "./context/PortfolioDataContext.tsx";
import {
  ContactSkeleton,
  EducationSkeleton,
  ExperienceSkeleton,
  ProjectsSkeleton,
  SkillsSkeleton,
} from "./components/skeletons/index.tsx";
import "./App.css";

const ExperienceSection = lazy(() => import("./components/experience/index.tsx"));
const ProjectsSection = lazy(() => import("./components/project/index.tsx"));
const SkillsSection = lazy(() => import("./components/skills/index.tsx"));
const EducationSection = lazy(() => import("./components/education/index.tsx"));
const Contact = lazy(() => import("./components/contact/index.tsx"));

const THEME_KEY = "portfolio-theme";

const getInitialTheme = () => {
  if (typeof window === "undefined") return true;
  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored) return stored === "dark";
  return true;
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
          primary: { main: isDarkMode ? "#c6fe1e" : "#004f32" },
          background: {
            default: isDarkMode ? "#0d0d0d" : "#ffffff",
            paper: isDarkMode ? "#1a1a1a" : "#ffffff",
          },
          text: {
            primary: isDarkMode ? "#f5f5f5" : "#00160d",
            secondary: isDarkMode ? "#a3a3a3" : "#666666",
          },
        },
        typography: {
          fontFamily: '"Inter", "Segoe UI", sans-serif',
          h1: { fontFamily: '"Bricolage Grotesque", "Inter", sans-serif', fontWeight: 500 },
          h2: { fontFamily: '"Bricolage Grotesque", "Inter", sans-serif', fontWeight: 500 },
        },
        shape: { borderRadius: 12 },
        breakpoints: { values: { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200 } },
      }),
    [isDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PortfolioDataProvider>
        <ResumeDialogProvider>
          <div className="app-root">
            <div className="app-glow" aria-hidden />

            <Navbar
              isDarkMode={isDarkMode}
              onToggleTheme={() => setIsDarkMode((prev) => !prev)}
              activeId={activeId}
            />

            <div className="page-shell">
            <main>
              <BioSection />
              <Suspense fallback={<ExperienceSkeleton />}>
                <ExperienceSection />
              </Suspense>
              <Suspense fallback={<ProjectsSkeleton />}>
                <ProjectsSection />
              </Suspense>
              <Suspense fallback={<SkillsSkeleton />}>
                <SkillsSection />
              </Suspense>
              <Suspense fallback={<EducationSkeleton />}>
                <EducationSection />
              </Suspense>
              <Suspense fallback={<ContactSkeleton />}>
                <Contact />
              </Suspense>
            </main>

            <Footer />
            </div>

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
        </ResumeDialogProvider>
      </PortfolioDataProvider>
    </ThemeProvider>
  );
};

export default App;
