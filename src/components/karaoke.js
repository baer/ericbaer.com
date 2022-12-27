import * as React from "react";
import Typography from "@mui/material/Typography";

import FeaturedSection from "./layout/featured-section";

export default function AlignItemsList() {
  const content = (
    <Typography sx={{ ml: 3, mt: 2, mb: 2 }}>Apeman, the Kinks</Typography>
  );

  return (
    <FeaturedSection
      color="#f8dffa"
      heading="Go-to Karaoke Song"
      content={content}
    />
  );
}
