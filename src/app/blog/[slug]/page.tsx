import "@/css/prism.css";

import markdownStyles from "./markdown-styles.module.css";

import Image from "next/image";

import Container from "@/components/container/container";
import { getAllPosts, getPostBySlug } from "../lib";
import FormattedDate from "@/components/formatted-date";
import joinClasses from "@/util/join-classes";

// Generate the post, note that this is a "react server component"! it is
// allowed to be async
export default async function Post({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { html, title, date, coverImage } = await getPostBySlug(slug, [
    "html",
    "title",
    "date",
    "coverImage",
  ]);

  return (
    <>
      <h1
        className={joinClasses([
          "mt-7",
          "mb-9",
          "font-bold",
          "text-5xl",
          "md:text-7xl",
          "lg:text-6xl",
          "leading-tight",
          "md:leading-none",
          "text-center",
          "tracking-tighter",
        ])}
      >
        {title}
      </h1>

      <div className="max-w-2xl">
        <div className="mb-6 ml-4 text-lg">
          <FormattedDate dateString={date ?? ""} />
        </div>
      </div>

      <div
        style={{ gridColumn: "1/4", width: "100%" }}
        className="mb-8 md:mb-9 sm:mx-0"
      >
        <div className="sm:mx-0">
          <Image
            src={coverImage ?? ""}
            alt={`Cover Image for ${title}`}
            className="shadow-sm max-2xl mx-auto"
            width={1300}
            height={630}
          />
        </div>
      </div>

      <article>
        <Container>
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: html ?? "" }}
          />
        </Container>
      </article>
    </>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { title } = await getPostBySlug(slug);

  return {
    title,
  };
}
