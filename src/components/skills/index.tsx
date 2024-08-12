// src/components/Skills.tsx
import React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";
import { skills } from "../../data/contents.ts";

const SkillsSection: React.FC = () => {
  return (
    <Box mb={4}>
      <Typography variant="h4">Skills</Typography>
      {skills.map((category) => (
        <Box key={category.title} mb={2}>
          <Typography variant="h6">{category.title}</Typography>
          <Grid container spacing={2}>
            {category.skills.map((skill) => (
              <Grid item key={skill.name} xs={6} sm={4} md={3}>
                <Box display="flex" alignItems="center">
                  <Avatar
                    variant="rounded"
                    src={skill.image}
                    alt={skill.name}
                    sx={{ marginRight: 1 }}
                  />
                  <Typography>{skill.name}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default SkillsSection;
