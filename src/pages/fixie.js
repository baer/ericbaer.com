import { useEffect, useState, useRef } from "react";
import Typography from "@mui/material/Typography";

import Link from "../components/link";
import Button from "@mui/material/Button";
import Terminal from "../components/terminal/terminal";
import Hal from "../components/hal/hal";
import styles from "../styles/fixie.module.css";

const PROMPT_KEYWORD = "PROMPT: ";

/* eslint-disable react/jsx-key */

const staticContent = {
  prs: [
    [
      `${PROMPT_KEYWORD}getExamplePR`,
      `A "Gotcha" in Next.js`,
      `---`,
      `Vercel's Next.js compiles and ships every file in your pages directory as a routable page. Unfortunately, if you co-locate page-specific helper components like "SearchBar," the builds slow down and hosting platforms will serve dozens/hundreds of invalid but crawlable pages. There are ways around it, but it made projects more challenging for Jr. developers to navigate.`,
      ` `,
      <span>
        Though this PR was closed in Jan 2020, this is now a much-vaunted
        feature in the new{" "}
        <Link href="https://github.com/vercel/next.js/discussions/37136">
          Layouts RFC
        </Link>{" "}
        which landed in Next.13 last week. There is even a
        <Link href="https://nextjs.org/blog/next-13#layouts">
          specific callout
        </Link>{" "}
        in the launch blog post.
      </span>,
      ` `,
      <Link href="https://github.com/vercel/next.js/issues/8454#issuecomment-525065134">
        https://github.com/vercel/next.js/issues/8454#issuecomment-525065134
      </Link>,
    ],
    [
      `${PROMPT_KEYWORD}getExamplePR`,
      `Examples of high-quality PRs going waaaaaay back (2013 and 2015).`,
      ` `,
      <Link href="https://github.com/adamwdraper/Numeral-js/pull/99">
        https://github.com/adamwdraper/Numeral-js/pull/99
      </Link>,
      <Link href="https://github.com/stormpath/express-stormpath/pull/197">
        https://github.com/stormpath/express-stormpath/pull/197
      </Link>,
    ],
    [
      `${PROMPT_KEYWORD}getExamplePR`,
      `Proposed fixes for accidental complexity in Next.js projects`,
      `---`,
      <span>
        A PR describing accidental complexity and the resulting developer
        friction for static site routing in Vercel&apos;s Next.js. Though this
        PR was closed, it was the{" "}
        <Link href="https://github.com/vercel/next.js/pull/6963#issuecomment-496254904">
          basis for a now-merged RFC
        </Link>{" "}
        written by the maintainer.
      </span>,
      ` `,
      <Link href="https://github.com/vercel/next.js/pull/6963">
        https://github.com/vercel/next.js/pull/6963
      </Link>,
    ],
    [
      `${PROMPT_KEYWORD}getExamplePRs`,
      `A feature request in CDK`,
      `---`,
      `This PR describes a new use case and discusses several ways to accommodate it. It has received significant traction and is a P2 for the team at the time of writing.`,
      ` `,
      <Link href="https://github.com/aws/aws-cdk/issues/8065">
        https://github.com/aws/aws-cdk/issues/8065
      </Link>,
    ],
    [
      `${PROMPT_KEYWORD}getExamplePRs`,
      `Work improving the build system for GraphQL's reference implementation`,
      ` `,
      <Link href="https://github.com/graphql/graphql-js/pull/939">
        https://github.com/graphql/graphql-js/pull/939
      </Link>,
      <Link href="https://github.com/graphql/graphql-js/pull/880">
        https://github.com/graphql/graphql-js/pull/880
      </Link>,
      <Link href="https://github.com/graphql/graphql-js/issues/843">
        https://github.com/graphql/graphql-js/issues/843
      </Link>,
    ],
    [
      `${PROMPT_KEYWORD}getExamplePRs`,
      `Working through a deep bug with the maintainer of Vercel's Next.js framework`,
      ` `,
      <Link href="https://github.com/vercel/next.js/pull/4341">
        https://github.com/vercel/next.js/pull/4341
      </Link>,
    ],
  ],
  /* eslint-enable react/jsx-key */
  jokes: [
    [
      `${PROMPT_KEYWORD}getJoke`,
      `How do you know if Will Smith has been at a crime scene?`,
      `Look for the Fresh Prince`,
    ],
    [
      `${PROMPT_KEYWORD}getJoke`,
      `What did the pirate say on his 80th birthday?`,
      `Aye Matey!`,
    ],
    [
      `${PROMPT_KEYWORD}getJoke`,
      `Why did the cow cross the road?`,
      `To get to the udder side!`,
    ],
    [
      `${PROMPT_KEYWORD}getJoke`,
      `Why don't skeletons go trick-or-treating?`,
      `Because they have no body to go with`,
    ],
    [
      `${PROMPT_KEYWORD}getJoke`,
      `What do you call an argentinian with a rubber toe?`,
      `Roberto`,
    ],
    [
      `${PROMPT_KEYWORD}getJoke`,
      `What did the bra say to the hat?`,
      `I'll cover these two, you go on ahead.`,
    ],
    [
      `${PROMPT_KEYWORD}getJoke`,
      `There's a thin line between a numerator and a denominator...`,
      `only a fraction of people can understand that.`,
    ],
    [
      `${PROMPT_KEYWORD}getJoke`,
      `Why aren't people buying into religion anymore?`,
      `Prophets are down.`,
    ],
  ],
};

export default function Fixie() {
  const terminalRef = useRef();

  const [shouldAnimateHal, setShouldAnimateHal] = useState(false);

  const [terminalContent, setTerminalContent] = useState([
    `PROMPT: Hello, Fixie`,
  ]);

  const appendExamplePR = () => {
    const prs = staticContent.prs;
    const randomPR = prs[Math.floor(Math.random() * prs.length)];
    setTerminalContent([...terminalContent].concat(randomPR, ` `));
  };

  const appendJoke = () => {
    const jokes = staticContent.jokes;
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    setTerminalContent([...terminalContent].concat(randomJoke, ` `));
  };

  const animateHAL = () => {
    setShouldAnimateHal(true);
    setTimeout(() => setShouldAnimateHal(false), 500);
  };

  return (
    <section className={styles.AppLayout}>
      <header className={styles.CenteredContainer}>
        <Typography variant="h1" className={styles.heading}>
          Fixie.ai
        </Typography>
      </header>
      <main>
        <div className={styles.CenteredContainer}>
          <Hal shouldAnimateHal={shouldAnimateHal} />
        </div>

        <div className={styles.CenteredContainer}>
          <div className={styles.buttonContainer}>
            <Button
              variant="outlined"
              sx={{ color: "green", textTransform: "none" }}
              onClick={() => {
                animateHAL();
                appendExamplePR();
              }}
            >
              getExamplePR
            </Button>
            <Button
              variant="outlined"
              sx={{ color: "green", textTransform: "none" }}
              onClick={() => {
                animateHAL();
                appendJoke();
              }}
            >
              getDadJoke
            </Button>
          </div>
        </div>

        <div className={styles.CenteredContainer}>
          <Terminal
            terminalContent={terminalContent}
            onClickButton={animateHAL}
            terminalRef={terminalRef}
          />
        </div>
      </main>
    </section>
  );
}
