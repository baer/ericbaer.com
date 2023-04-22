import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { pick } from "lodash/fp";

import Post from "../../interfaces/post";
import markdownToHTML from "./md-to-html";

const postsDirectory = join(process.cwd(), "content");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export async function getPostBySlug(
  slug: string,
  fields: (keyof Post)[] = []
): Promise<Partial<Post>> {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const post = {
    ...data,
    slug: realSlug,
    date: data.date,
    html: await markdownToHTML(content),
  };

  return fields.length ? pick(fields, post) : post;
}

export async function getAllPosts(fields: (keyof Post)[] = []) {
  const slugs = getPostSlugs();
  const posts = await Promise.all(slugs.map((id) => getPostBySlug(id, fields)));

  // Descending Order
  return posts.sort((post1, post2) => {
    const date1 = post1.date ?? "";
    const date2 = post2.date ?? "";
    return date1 > date2 ? -1 : 1;
  });
}
