import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

export default function FeaturedSection({ color, heading, content }) {
  return (
    <Container sx={{ pb: 3 }}>
      <Paper
        elevation={0}
        variant="outlined"
        sx={{
          backgroundColor: color,
          border: "2px solid black",
          borderRadius: 0,
          filter: "drop-shadow(10px 10px 0px #4444dd)",
        }}
      >
        <Typography
          sx={{
            pt: 3,
            pl: 3,
            pr: 3,
          }}
          variant="h5"
        >
          {heading}
        </Typography>

        {content}
      </Paper>
    </Container>
  );
}
