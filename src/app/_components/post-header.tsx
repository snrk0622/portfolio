import Link from "next/link";
import Avatar from "./_top/_side-column/_intro-card/avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./_common/utils/date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";
import { Tag } from "@/interfaces/tag";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
  tags: Tag[];
};

export function PostHeader({ title, coverImage, date, author, tags }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} imagePath={author.imagePath} externalLinks={author.externalLinks} />
      </div>
      <ul className="flex gap-x-2">
        {
          tags.map((tag) => (
            <li key={tag.name} className="font-bold mb-12">
              <Link href={`/tags/${tag}`} className="hover:underline">
                {tag.name}
              </Link>
            </li>
          ))
        }
      </ul>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
        <Avatar name={author.name} imagePath={author.imagePath} externalLinks={author.externalLinks} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
