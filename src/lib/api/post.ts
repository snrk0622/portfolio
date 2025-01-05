import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

import { Post } from "@/interfaces/post";
import { Category } from "@/interfaces/category";
import { getTagByName } from "@/lib/api/tag";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

// `tags` プロパティを `string[]` に変更した整形前の型を定義
export type PostWithStringTag = Omit<Post, "tags"> & {
  tags: string[];
};

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const post = ({ ...data, slug: realSlug, content }) as PostWithStringTag;
  const tags = post.tags.map((tag) => getTagByName(tag)).filter((tag) => tag !== undefined);
  
  return ({ ...post, tags });
}

export function getPostsByCategory(category: Category, limit?: number) {
  const posts = getAllPosts()
  return posts
    .filter((post) => post.category === category)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    .slice(0, limit ?? posts.length)
}

export function getPostsByTag(tagName: string, limit?: number) {
  const posts = getAllPosts()
  return posts
    .filter((post) => post.tags.some((tag) => tag.name === tagName))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    .slice(0, limit ?? posts.length)
}
