import "./globals.css";
import styles from "./layout.module.css";

import Link from "next/link";
import { Inter } from "next/font/google";

import joinClasses from "@/util/join-classes";
import StackOverflowIcon from "@/components/icons/stack-overflow";
import LinkedInIcon from "@/components/icons/linkedin";
import TwitterIcon from "@/components/icons/twitter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Baerly Working",
  description: "Eric Baer's personal website and blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Cloudflare Web Analytics */}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "c6578cc0825e4071a6f030a9b5267436"}'
        />
      </head>
      <body className={inter.className}>
        <div className={styles["app-layout"]}>
          <header>
            <h1
              className={joinClasses([
                "text-center",
                "text-7xl",
                "m-10",
                "font-light",
              ])}
            >
              Eric Baer
            </h1>

            <div
              className={joinClasses([
                "flex",
                "justify-around",
                "mb-7",
                "text-4xl",
                "text-gray-500",
              ])}
            >
              <Link
                aria-label="LinkedIn link"
                href="https://www.linkedin.com/in/ericjbaer"
              >
                <LinkedInIcon />
              </Link>
              <Link
                aria-label="Twitter link"
                href="https://twitter.com/ebaerbaerbaer"
              >
                <TwitterIcon />
              </Link>
              <Link
                aria-label="StackOverflow link"
                href="https://stackoverflow.com/users/856873/baer"
              >
                <StackOverflowIcon />
              </Link>
            </div>
          </header>
          <main>{children}</main>
          <footer>
            {"Copyright © Eric Baer "}
            {new Date().getFullYear()}
            {"."}
          </footer>
        </div>
      </body>
    </html>
  );
}
