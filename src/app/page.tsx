"use client";

import styles from "./page.module.css";

import joinClasses from "@/util/join-classes";
import Card from "@/components/card/card";

export default function Home() {
  return (
    <section
      className={joinClasses(["flex", "flex-col", "gap-14", "ml-4", "mr-4"])}
    >
      <div
        className={joinClasses([
          styles["featured-work-section"],
          "bg-[#b3e1bb]",
          "flex",
          "flex-col",
          "gap-6",
          "p-6",
        ])}
      >
        <h2
          className={joinClasses([
            styles["section-heading"],
            "text-2xl",
            "text-center",
            "md:text-left",
          ])}
        >
          Featured Speaking
        </h2>

        <Card
          title="Simple caching, made difficult, GraphQL Summit 2019"
          description="Why GraphQL bypasses HTTP caching, why it's a problem, and
          why it no longer needs to."
          url="https://youtu.be/4lqEXYHPmVk"
          imgURI="/images/simple-caching-made-difficult.svg"
          imgAlt="Presentation thumbnail"
        />

        <Card
          title="GraphQL Under the Hood, GraphQL Summit 2017"
          description="A deep dive into GraphQL's specification and a walkthrough of what happens when a GraphQL operation runs, from the lexer to the spec's CompleteField method."
          url="https://youtu.be/fo6X91t3O2I"
          imgURI="/images/graphql-under-the-hood.svg"
          imgAlt="Presentation thumbnail"
        />

        <Card
          title="The Evolution of API Design: From RPC to GraphQL, VueConf 2017"
          description="A discussion of RESTs challenges and a presentation of emerging designs like GraphQL as a post-REST paradigm (but not a silver bullet)."
          url="https://youtu.be/PmWho45WmQY"
          imgURI="/images/evolution-of-api-design.svg"
          imgAlt="Presentation thumbnail"
        />
      </div>

      <div
        className={joinClasses([
          styles["featured-work-section"],
          "bg-[#dfecfa]",
          "flex",
          "flex-col",
          "gap-6",
          "p-6",
        ])}
      >
        <h2 className={joinClasses([styles["section-heading"], "text-2xl"])}>
          Featured Publications
        </h2>

        <Card
          title="What React Is and Why It Matters"
          description="O'Reilly Media 2018"
          url="https://www.oreilly.com/library/view/what-react-is/9781491996744/"
          imgURI="/images/oreilly-logo.svg"
          imgAlt="O'Reilly Media Logo"
          imgWidth="50px"
          imgHeight="50px"
        />
        <Card
          title="A GraphQL Primer: Why We Need A New Kind Of API (Part 1)"
          description="Smashing Magazine"
          url="https://www.smashingmagazine.com/2018/01/graphql-primer-new-api-part-1/"
          imgURI="/images/smashing-magazine-logo.svg"
          imgAlt="Smashing Magazine Logo"
          imgWidth="50px"
          imgHeight="50px"
        />
        <Card
          title="A GraphQL Primer: The Evolution Of API Design (Part 2)"
          description="Smashing Magazine"
          url="https://www.smashingmagazine.com/2018/01/graphql-primer-new-api-part-2/"
          imgURI="/images/smashing-magazine-logo.svg"
          imgAlt="Presentation thumbnail"
          imgWidth="50px"
          imgHeight="50px"
        />
      </div>

      <div
        className={joinClasses([
          styles["featured-work-section"],
          "bg-[#d8f059]",
          "flex",
          "flex-col",
          "gap-6",
          "p-6",
        ])}
      >
        <h2 className={joinClasses([styles["section-heading"], "text-2xl"])}>
          Assorted Projects
        </h2>

        <Card
          title="isThereAFuckingRockiesGame.com"
          description="WHAT?! Why is traffic so... Oh. Right."
          url="https://isthereafuckingrockiesgame.com/"
          imgURI="/images/rockies-social-preview.png"
          imgAlt="isThereAFuckingRockiesGame.com Social Preview"
        />
      </div>

      <div
        className={joinClasses([
          styles["featured-work-section"],
          "bg-[#f8dffa]",
          "flex",
          "flex-col",
          "gap-6",
          "p-6",
        ])}
      >
        <h2 className={joinClasses([styles["section-heading"], "text-2xl"])}>
          Go-to Karaoke Song
        </h2>

        <p className="">Apeman, the Kinks</p>
      </div>
    </section>
  );
}
