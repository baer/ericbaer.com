import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Image from "next/image";

import Link from "./link";

export default function AlignItemsList() {
  return (
    <Container>
      <Typography variant="h5">Assorted Projects</Typography>

      <List sx={{ width: "100%" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Image
              src="/images/rockies-social-preview.png"
              alt="Website Social Preview"
              height={40}
              width={40}
            />
          </ListItemAvatar>
          <ListItemText
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
        <Divider variant="inset" component="li" />
      </List>
    </Container>
  );
}
