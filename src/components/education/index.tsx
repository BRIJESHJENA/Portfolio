// src/components/Education.tsx
import React from "react";
import { Box, Typography, Avatar, Paper, Divider } from "@mui/material";
import { education } from "../../data/contents.ts";

const EducationSection: React.FC = () => {
  return (
    <Box mb={4}>
      <Typography variant="h4">Education</Typography>
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
        {education.map((edu, index) => (
          <>
            {index !== 0 && <Divider style={{ margin: "20px" }} />}
            <Box display="flex" alignItems="center">
              <Avatar
                src={edu.img}
                alt={edu.school}
                sx={{ width: 80, height: 80, marginRight: 2 }}
              />
              <Box>
                <Typography variant="h6">{edu.degree}</Typography>
                <Typography color="textSecondary">{edu.school}</Typography>
                <Typography color="textSecondary">{edu.date}</Typography>
              </Box>
            </Box>
          </>
        ))}
      </Paper>
    </Box>
  );
};

export default EducationSection;
