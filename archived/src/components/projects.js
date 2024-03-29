import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Image from "next/image";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Link from "./link";
import FeaturedSection from "./layout/featured-section";

export default function AlignItemsList() {
  const theme = useTheme();
  const isVerySmol = useMediaQuery(theme.breakpoints.down("sm"));

  const content = (
    <List sx={{ pl: 1, pr: 1, width: "100%" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Image
            src="/images/rockies-social-preview.png"
            alt="Website Social Preview"
            height={78.5}
            width={150}
          />
        </ListItemAvatar>
        <ListItemText
          sx={{
            marginLeft: 3,
            ...(isVerySmol && {
              width: "100px",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }),
          }}
          primary={
            <Link
              color="text.primary"
              href="https://isthereafuckingrockiesgame.com/"
            >
              isThereAFuckingRockiesGame.com
            </Link>
          }
          secondary="WHAT?! Why is traffic so... Oh. Right."
        />
      </ListItem>
    </List>
  );

  return (
    <FeaturedSection
      color="#d8f059"
      heading="Assorted Projects"
      content={content}
    />
  );
}
