import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconButton from "@mui/material/IconButton";

import Copyright from "../src/components/copyright";
import FeaturedPublications from "../src/components/featured-publications";
import FeaturedTalks from "../src/components/featured-talks";
import Karaoke from "../src/components/karaoke";

export default function SignUp() {
  return (
    <Container component="main" maxWidth="lg" sx={{ minHeight: "100vh" }}>
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h2">Eric Baer</Typography>

        {/* TODO: Consider Stack Overflow and GH */}
        <Grid container>
          <Grid item xs={6} display="flex" justifyContent="right">
            <IconButton
              sx={{ marginRight: 2 }}
              aria-label="upload picture"
              component="a"
              href="https://www.linkedin.com/in/ericjbaer"
            >
              <LinkedInIcon sx={{ fontSize: 50 }} />
            </IconButton>
          </Grid>
          <Grid item xs={6} display="flex" justifyContent="leftt">
            <IconButton
              sx={{ marginLeft: 2 }}
              aria-label="upload picture"
              component="a"
              href="https://twitter.com/ebaerbaerbaer"
            >
              <TwitterIcon sx={{ fontSize: 50 }} />
            </IconButton>
          </Grid>
        </Grid>

        <Box sx={{ marginTop: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FeaturedTalks />
            </Grid>
            <Grid item xs={12}>
              <FeaturedPublications />
            </Grid>
            <Grid item xs={12}>
              <Karaoke />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ marginTop: 5, marginBottom: 3 }} />
    </Container>
  );
}
