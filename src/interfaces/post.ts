import { type Author } from "./author";
import { type Category } from "./category";

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  category: Category;
  preview?: boolean;
  tags: string[];
};
