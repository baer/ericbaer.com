import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Image from "next/image";

import FeaturedSection from "./layout/featured-section";
import Link from "./link";

export default function AlignItemsList() {
  const content = (
    <List sx={{ pl: 1, pr: 1, width: "100%" }}>
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
          sx={{ marginLeft: 3 }}
          primary={
            <Link color="text.primary" href="https://youtu.be/4lqEXYHPmVk">
              Simple caching, made difficult, GraphQL Summit 2019
            </Link>
          }
          secondary="Why GraphQL bypasses HTTP caching, why it's a problem, and why it no longer needs to."
        />
      </ListItem>
      <Divider component="li" />

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
          sx={{ marginLeft: 3 }}
          primary={
            <Link color="text.primary" href="https://youtu.be/fo6X91t3O2I">
              GraphQL Under the Hood, GraphQL Summit 2017
            </Link>
          }
          secondary="A deep dive into GraphQL's specification and a walkthrough of what happens when a GraphQL operation runs, from the lexer to the spec's CompleteField method."
        />
      </ListItem>
      <Divider component="li" />

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
          sx={{ marginLeft: 3 }}
          primary={
            <Link color="text.primary" href="https://youtu.be/PmWho45WmQY">
              The Evolution of API Design: From RPC to GraphQL, VueConf 2017
            </Link>
          }
          secondary="A discussion of RESTs challenges and a presentation of emerging designs like GraphQL as a post-REST paradigm (but not a silver bullet)."
        />
      </ListItem>
    </List>
  );

  return (
    <FeaturedSection
      color="#b3e1bb"
      heading="Featured Speaking"
      content={content}
    />
  );
}
