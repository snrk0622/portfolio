import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

import { Post } from "@/interfaces/post";
import { Category } from "@/interfaces/category";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getPostsByCategory(category: Category, limit?: number) {
  const slugs = getPostSlugs()
  return slugs
    .map((slug) =>  getPostBySlug(slug))
    .filter((post) => post.category === category)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    .slice(0, limit ?? slugs.length)
}

export function getPostsByTag(tag: string) {
  const slugs = getPostSlugs()
  return slugs
    .map((slug) =>  getPostBySlug(slug))
    .filter((post) => post.tags.includes(tag))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}
