import React from "react";
import { Box, Typography, Grid, Avatar, Paper, Divider } from "@mui/material";
import { skills } from "../../data/contents.ts";

const SkillsSection: React.FC = () => {
  return (
    <Box mb={4}>
      <Typography variant="h4">Skills</Typography>
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
        {skills.map((category, index) => (
          <>
            {index !== 0 && <Divider style={{ margin: "20px" }} />}

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
          </>
        ))}
      </Paper>
    </Box>
  );
};

export default SkillsSection;
