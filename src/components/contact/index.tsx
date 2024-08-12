import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    );
    const mailtoLink = `mailto:brijeshjena123@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Box>
      <Typography variant="h4">Contact Us</Typography>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Grid>
          </Grid>
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: "greenyellow" }}
              disabled={name === "" || message === "" || email === ""}
            >
              <Typography display="flex">
                Send Message
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_44_96525)">
                    <path
                      d="M16.004 9.414L7.39697 18.021L5.98297 16.607L14.589 8H7.00397V6H18.004V17H16.004V9.414Z"
                      fill={"#8c8c8c"}
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_44_96525">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Typography>
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};
