import Link from "next/link";
import { getAllPosts } from "./lib";
import joinClasses from "@/util/join-classes";
import Container from "@/components/container/container";
import FormattedDate from "@/components/formatted-date";

export default async function Page() {
  const posts = await getAllPosts();

  return (
    <ul className={joinClasses(["flex", "flex-col", "gap-7"])}>
      {!posts.length && "No posts found."}
      {posts.map((frontMatter) => {
        const { slug, date, title, excerpt } = frontMatter;
        return (
          <Container key={slug}>
            <li className="py-4">
              <article
                className={joinClasses([
                  "space-y-2",
                  "xl:grid",
                  "xl:grid-cols-4",
                  "xl:items-baseline",
                  "xl:space-y-0",
                ])}
              >
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500">
                    <FormattedDate dateString={date ?? ""} />
                  </dd>
                </dl>
                <div className="space-y-3 xl:col-span-3">
                  <div>
                    <h3 className="text-2xl font-bold leading-8 tracking-tight">
                      <Link href={`/blog/${slug}`} className="text-gray-900">
                        {title}
                      </Link>
                    </h3>
                  </div>
                  <div className="prose max-w-none text-gray-500">
                    {excerpt}
                  </div>
                </div>
              </article>
            </li>
          </Container>
        );
      })}
    </ul>
  );
}
