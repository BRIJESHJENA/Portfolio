import React from "react";
import { Box, Typography, Avatar, Paper } from "@mui/material";
import { experiences } from "../../data/contents.ts";
import useBreakpoint from "../../assets/breakpoints/index.tsx";

const ExperienceSection: React.FC = () => {
  const [, , desktopView] = useBreakpoint();

  return (
    <Box mb={4}>
      <Typography variant="h4">Experience</Typography>
      {experiences.map((exp) => (
        <Paper key={exp.id} elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
          <Box
            display="flex"
            alignItems="center"
            flexDirection={desktopView ? "row" : "column"}
            width="100%"
          >
            <Box
              sx={{
                margin: 2,
                display: "flex",
                flexDirection: desktopView ? "column" : "row",
                justifyContent: "flex-start",
              }}
              width={!desktopView ? "100%" : "auto"}
            >
              <Avatar
                src={exp.img}
                alt={exp.company}
                sx={{ width: 80, height: 80, marginRight: 2 }}
              />
              <Box>
                <Typography variant="h6">{exp.company}</Typography>
                <Typography variant="body2">{exp.role}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {exp.date}
                </Typography>
              </Box>
            </Box>
            <Box>
              {exp.desc.map((e) => (
                <Typography>{e}</Typography>
              ))}
              <Typography paddingTop={2}>
                <strong>Skills:</strong> {exp.skills.join(", ")}
              </Typography>
            </Box>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default ExperienceSection;
