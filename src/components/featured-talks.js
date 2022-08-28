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
      <Typography variant="h5">Featured Speaking</Typography>

      <List sx={{ width: "100%" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Image
              src="/images/simple-caching-made-difficult.svg"
              alt="Presentation thumbnail"
              height={84}
              width={150}
            />
          </ListItemAvatar>
          <ListItemText
            sx={{ marginLeft: 1 }}
            primary={
              <Link color="text.primary" href="https://youtu.be/4lqEXYHPmVk">
                Simple caching, made difficult, GraphQL Summit 2019
              </Link>
            }
            secondary="Why GraphQL bypasses HTTP caching, why it's a problem, and why it no longer needs to."
          />
        </ListItem>
        <Divider variant="inset" component="li" />

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Image
              src="/images/graphql-under-the-hood.svg"
              alt="Presentation thumbnail"
              height={84}
              width={150}
            />
          </ListItemAvatar>
          <ListItemText
            sx={{ marginLeft: 1 }}
            primary={
              <Link color="text.primary" href="https://youtu.be/fo6X91t3O2I">
                GraphQL Under the Hood, GraphQL Summit 2017
              </Link>
            }
            secondary="A deep dive into GraphQL's specification with a focus on what happens when a GraphQL operation runs, from the lexer to the CompleteField method. As it turns out, there is much more room for improvisation than you'd expect."
          />
        </ListItem>
        <Divider variant="inset" component="li" />

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Image
              src="/images/evolution-of-api-design.svg"
              alt="Presentation thumbnail"
              height={84}
              width={150}
            />
          </ListItemAvatar>
          <ListItemText
            sx={{ marginLeft: 1 }}
            primary={
              <Link color="text.primary" href="https://youtu.be/PmWho45WmQY">
                The Evolution of API Design: From RPC to GraphQL, VueConf 2017
              </Link>
            }
            secondary="This talk attempts to lay bare the lessons of 60 years of API development, from RPC to REST. With mounting pressure from mobile and distributed computing, RESTs viability is waning, and this talk presents emerging designs like GraphQL as a post-REST paradigm (but not a silver bullet)."
          />
        </ListItem>
      </List>
    </Container>
  );
}
