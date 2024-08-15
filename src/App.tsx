import React, { useState } from "react";
import { ThemeProvider, CssBaseline, Box, createTheme } from "@mui/material";
import BioSection from "./components/bio/index.tsx";
import SkillsSection from "./components/skills/index.tsx";
import ExperienceSection from "./components/experience/index.tsx";
import EducationSection from "./components/education/index.tsx";
import ProjectsSection from "./components/project/index.tsx";
import Sidebar from "./components/sidebar/index.tsx";
import useBreakpoint from "./assets/breakpoints/index.tsx";
import "./App.css";
import { Contact } from "./components/contact/index.tsx";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mobileView, , desktopView] = useBreakpoint();

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
    typography: {
      fontFamily: '"Lato", sans-serif',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        display="flex"
        flexDirection={desktopView ? "row" : "column"}
        // margin={desktopView ? "2.5rem 10rem" : "2rem"}
        margin={desktopView ? "0" : "0 2rem"}
        padding={desktopView ? "0" : "2rem 0"}
        style={{
          position: "fixed",
          height: "100vh",
        }}
      >
        <Sidebar checkedCall={isDarkMode} onChangeCall={handleThemeChange} />
        <Box
          className="main"
          component="main"
          sx={{
            padding: desktopView ? "24px" : "24px 0 0 0",
            overflowY: "scroll",
            height: "100vh",
            maxHeight: desktopView ? "100vh" : "auto",

            // maxHeight: desktopView ? "90vh" : mobileView ? "76vh" : "65vh",
          }}
        >
          <Box>
            <Box id="about">
              <BioSection />
            </Box>
            <Box id="experience">
              <ExperienceSection />
            </Box>
            <Box id="projects">
              <ProjectsSection />
            </Box>
            <Box>
              <SkillsSection />
              <EducationSection />
            </Box>
            <Box id="contact">
              <Contact />
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
