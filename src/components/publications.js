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
            src="/images/oreilly-logo.svg"
            alt="O'Reilly Media Logo"
            height={40}
            width={40}
          />
        </ListItemAvatar>
        <ListItemText
          sx={{ marginLeft: 3 }}
          primary={
            <Link
              color="text.primary"
              href="https://www.oreilly.com/library/view/what-react-is/9781491996744/"
            >
              What React Is and Why It Matters
            </Link>
          }
          secondary="O'Reilly Media 2018"
        />
      </ListItem>
      <Divider component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Image
            src="/images/smashing-magazine-logo.svg"
            alt="Smashing Magazine Logo"
            height={40}
            width={40}
          />
        </ListItemAvatar>
        <ListItemText
          sx={{ marginLeft: 3 }}
          primary={
            <Link
              color="text.primary"
              href="https://www.smashingmagazine.com/2018/01/graphql-primer-new-api-part-1/"
            >
              A GraphQL Primer: Why We Need A New Kind Of API (Part 1)
            </Link>
          }
          secondary="Smashing Magazine"
        />
      </ListItem>
      <Divider component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Image
            src="/images/smashing-magazine-logo.svg"
            alt="Smashing Magazine Logo"
            height={40}
            width={40}
          />
        </ListItemAvatar>
        <ListItemText
          sx={{ marginLeft: 3 }}
          primary={
            <Link
              color="text.primary"
              href="https://www.smashingmagazine.com/2018/01/graphql-primer-new-api-part-2/"
            >
              A GraphQL Primer: The Evolution Of API Design (Part 2)
            </Link>
          }
          secondary="Smashing Magazine"
        />
      </ListItem>
    </List>
  );

  return (
    <FeaturedSection
      color="#dfecfa"
      heading="Featured Publications"
      content={content}
    />
  );
}
