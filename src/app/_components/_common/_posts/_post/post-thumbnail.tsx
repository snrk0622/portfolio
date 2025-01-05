import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";

import { Post } from "@/interfaces/post";
import DateFormatter from "@/app/_components/_common/utils/date-formatter";
import Tags from "@/app/_components/_common/_tags/tags";

type Props = {
  post: Post;
};

const PostThumbnail: React.FC<Props> = ({ post }) => {
  return (
    <div className="sm:w-1/2 lg:w-1/3 sm:px-2 pb-5">
      <Link href={`/posts/${post.slug}`}>
        <div className="h-full border border-light-sub dark:border-dark-sub overflow-hidden">
          <div className="h-30 overflow-hidden p-4 text-lg text-bold bg-light-sub dark:bg-dark-sub text-light-base dark:text-dark-base">
            <div className="text-xl line-clamp-3">{ post.title }</div>
          </div>
          <div className="p-4">
            <Tags tags={post.tags} className="mb-2" />
            <div className="flex items-center text-xs opacity-50">
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