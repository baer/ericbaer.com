import { useEffect, useState, useRef } from "react";
import Typography from "@mui/material/Typography";

import Link from "../components/link";
import Button from "@mui/material/Button";
import Terminal from "../components/terminal/terminal";
import Hal from "../components/hal/hal";
import styles from "../styles/fixie.module.css";

const PROMPT_KEYWORD = "PROMPT: ";

const staticContent = {
  prs: [
    `${PROMPT_KEYWORD}getExamplePRs`,
    // eslint-disable-next-line react/jsx-key
    <span>
      A PR describing accidental complexity and the resulting developer friction
      for static site routing in Vercel&apos;s Next.js which was used for a
      now-merged rendering &nbsp;
      <Link href="https://github.com/vercel/next.js/pull/6963#issuecomment-496254904">
        RFC
      </Link>
      .
    </span>,
    // eslint-disable-next-line react/jsx-key
    <Link href="https://github.com/vercel/next.js/pull/6963">
      https://github.com/vercel/next.js/pull/6963
    </Link>,
    " ",
    "A feature request in aws-cdk that describes a new use case and a discussion of several ways to accommodate it. It has received significant traction and is a P2 for the team at the time of writing.",
    // eslint-disable-next-line react/jsx-key
    <Link href="https://github.com/aws/aws-cdk/issues/8065">
      https://github.com/aws/aws-cdk/issues/8065
    </Link>,
    " ",
    "Working through a deep bug with the maintainer of Vercel's Next.js framework",
    // eslint-disable-next-line react/jsx-key
    <Link href="https://github.com/vercel/next.js/pull/4341">
      https://github.com/vercel/next.js/pull/4341
    </Link>,
  ],
  jokes: [
    [
      `${PROMPT_KEYWORD}How do you know if Will Smith has been at a crime scene?`,
      "look for the Fresh Prince",
    ],
    [
      `${PROMPT_KEYWORD}What did the pirate say on his 80th birthday?`,
      "Aye Matey!",
    ],
    [
      `${PROMPT_KEYWORD}Why did the cow cross the road?`,
      "To get to the udder side!",
    ],
    [
      `${PROMPT_KEYWORD}Why don't skeletons go trick-or-treating?`,
      `Because they have no body to go with`,
    ],
    [
      `${PROMPT_KEYWORD}What do you call an argentinian with a rubber toe?`,
      `Roberto`,
    ],
  ],
};

export default function Fixie() {
  const terminalRef = useRef();

  const [shouldAnimateHal, setShouldAnimateHal] = useState(false);

  const [terminalContent, setTerminalContent] = useState([
    "PROMPT: Hello, Fixie",
  ]);

  const appendExamplePRs = () => {
    setTerminalContent([...terminalContent].concat(staticContent.prs));
  };

  const appendJoke = () => {
    const jokes = staticContent.jokes;
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    setTerminalContent([...terminalContent].concat(randomJoke));
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
              onClick={() => {
                animateHAL();
                appendExamplePRs();
              }}
            >
              Example PRs
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                animateHAL();
                appendJoke();
              }}
            >
              Tell Me A Joke
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
