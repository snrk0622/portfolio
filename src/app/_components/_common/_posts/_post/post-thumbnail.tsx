import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";

import { Post } from "@/interfaces/post";
import DateFormatter from "@/app/_components/_common/utils/date-formatter";
import Tags from "./tags";

type Props = {
  post: Post;
};

const PostThumbnail: React.FC<Props> = ({ post }) => {
  return (
    <div className="sm:w-1/2 lg:w-1/3 sm:px-2 pb-5">
      <Link href={`/posts/${post.slug}`}>
        <div className="border border-light-sub dark:border-dark-sub overflow-hidden h-full">
          <img src={post.coverImage} alt={post.title} />
          <div className="p-4 pb-0">
            <div className="text-lg text-bold line-clamp-3">{ post.title }</div>
            <Tags tags={post.tags} className="pt-3" />
            <div className="flex items-center py-4 text-xs opacity-50">
              <FaRegCalendarAlt className="mr-1" />
              <DateFormatter dateString={post.date} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PostThumbnail;