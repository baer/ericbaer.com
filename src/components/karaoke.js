import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function AlignItemsList() {
  return (
    <Container>
      <Typography variant="h5">Go-to Karaoke Song</Typography>
      <Typography
        sx={{
          marginTop: 3,
          marginLeft: 3,
        }}
      >
        Apeman, the Kinks
      </Typography>
    </Container>
  );
}
