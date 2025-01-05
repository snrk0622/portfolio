import { type Category } from "./category";
import { Tag } from "./tag";

export type Post = {
  slug: string;
  title: string;
  date: string;
  content: string;
  category: Category;
  preview?: boolean;
  tags: Tag[];
  relatedPosts?: string[];
};
