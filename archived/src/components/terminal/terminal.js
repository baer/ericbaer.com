import React from "react";

import emojis from "../../emojis";
import styles from "./terminal.module.css";

import { Fira_Code } from "@next/font/google";

const firaCode = Fira_Code({ subsets: ["latin"] });

const PROMPT_KEYWORD = "PROMPT: ";

const Line = ({ children, prompt = false, withCaret = false }) => {
  return (
    <div>
      {prompt && <span className={styles.prompt}>{prompt} ~ </span>}
      {children}
      {withCaret && <span className={styles.caret} />}
    </div>
  );
};

const wrapContentInLines = (content, promptKeyword) =>
  content.map((elem, index) => {
    const isPrompt = typeof elem === "string" && elem.startsWith(promptKeyword);

    return (
      <Line prompt={isPrompt && emojis[index]} key={index}>
        {isPrompt ? elem.replace(promptKeyword, "") : elem}
      </Line>
    );
  });

const Terminal = ({ terminalContent, onClickButton }) => {
  const terminalContentAsLines = wrapContentInLines(
    terminalContent,
    PROMPT_KEYWORD
  );

  return (
    <div className={styles.root}>
      <div className={`${styles.inner}`}>
        <div className={styles.header}>
          <span
            onClick={onClickButton}
            className={`${styles.icon} ${styles.closeIcon}`}
          />
          <span
            onClick={onClickButton}
            className={`${styles.icon} ${styles.minimizeIcon}`}
          />
          <span
            onClick={onClickButton}
            className={`${styles.icon} ${styles.zoomIcon}`}
          />
        </div>

        <div className={`${styles.body} ${firaCode.className}`}>
          {terminalContentAsLines}
          <Line prompt={emojis[terminalContent.length]} withCaret={true} />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
