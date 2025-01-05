import { Tag } from "@/interfaces/tag";
import { getPostsByTag } from "@/lib/api/post";
import PostThumbnail from "@/app/_components/_common/_posts/_post/post-thumbnail";

type Props = {
  tag: Tag;
  limit?: number;
};

const PostsByTag: React.FC<Props> = ({ tag, limit }) => {
  const posts = getPostsByTag(tag.name, limit);

  return (
    <div className="sm:flex sm:flex-wrap sm:items-stretch">
      {posts.map((post) => (
        <PostThumbnail key={post.slug} post={post} />
      ))}
    </div>
  );
}

export default PostsByTag;