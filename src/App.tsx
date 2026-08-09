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
      <PortfolioDataProvider>
        <ResumeDialogProvider>
          <div className="app-root">
            <div className="app-glow" aria-hidden />

            <Navbar
              isDarkMode={isDarkMode}
              onToggleTheme={() => setIsDarkMode((prev) => !prev)}
              activeId={activeId}
            />

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
