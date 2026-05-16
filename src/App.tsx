import React, { useState } from "react";
import { ThemeProvider, CssBaseline, Box, createTheme } from "@mui/material";
import BioSection from "./components/bio/index.tsx";
import SkillsSection from "./components/skills/index.tsx";
import ExperienceSection from "./components/experience/index.tsx";
import EducationSection from "./components/education/index.tsx";
import ProjectsSection from "./components/project/index.tsx";
import Sidebar from "./components/sidebar/index.tsx";
import useBreakpoint from "./assets/breakpoints/index.tsx";
import Marquee from "./components/common/Marquee.tsx";
import "./App.css";
import Contact from "./components/contact/index.tsx";

const MARQUEE_ITEMS = [
  "FULL STACK DEV",
  "REACT",
  "TYPESCRIPT",
  "NODE.JS",
  "UI/UX",
  "OPEN TO WORK",
  "PORTFOLIO 2026",
];

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [, , , , bp] = useBreakpoint();

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: { main: "#ff4d9d" },
      secondary: { main: "#5bc0ff" },
      background: {
        default: isDarkMode ? "#0e0e14" : "#fffef5",
        paper: isDarkMode ? "#181824" : "#fffef5",
      },
      text: {
        primary: isDarkMode ? "#ececf4" : "#0a0a0a",
        secondary: isDarkMode ? "rgba(236,236,244,0.72)" : "rgba(10,10,10,0.65)",
      },
    },
    typography: {
      fontFamily: '"DM Sans", sans-serif',
      h1: { fontFamily: '"Archivo Black", sans-serif', fontWeight: 900 },
      h2: { fontFamily: '"Archivo Black", sans-serif', fontWeight: 900 },
      h3: { fontFamily: '"Archivo Black", sans-serif', fontWeight: 900 },
    },
    shape: { borderRadius: 4 },
    breakpoints: {
      values: { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200 },
    },
    components: {
      MuiPaper: {
        styleOverrides: { root: { backgroundImage: "none", boxShadow: "none" } },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        className="gradient-bg app-root"
        data-theme={isDarkMode ? "dark" : "light"}
      >
        <Box className="vibe-grid-bg" aria-hidden />

        {!bp.mobile && (
          <>
            <Box
              className="floating-orb"
              sx={{ width: 320, height: 320, top: "5%", right: "-5%", background: "#ff4d9d" }}
            />
            <Box
              className="floating-orb"
              sx={{
                width: 280,
                height: 280,
                bottom: "10%",
                left: "-8%",
                background: "#5bc0ff",
                animationDelay: "4s",
              }}
            />
          </>
        )}

        <Box className="app-shell">
          <Sidebar checkedCall={isDarkMode} onChangeCall={() => setIsDarkMode(!isDarkMode)} />

          <Box component="main" className="main">
            <Marquee items={MARQUEE_ITEMS} />

            <Box className="main-content">
              <Box id="about" className="main-section">
                <BioSection />
              </Box>
              <Box id="experience" className="main-section">
                <ExperienceSection />
              </Box>
              <Box id="projects" className="main-section">
                <ProjectsSection />
              </Box>
              <Box id="skills" className="main-section">
                <SkillsSection />
                <EducationSection />
              </Box>
              <Box id="contact" className="main-section main-section--last">
                <Contact />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
