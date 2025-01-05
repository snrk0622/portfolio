import { Category } from "@/interfaces/category";
import { getPostsByCategory } from "@/lib/api/post";
import PostThumbnail from "@/app/_components/_common/_posts/_post/post-thumbnail";

type Props = {
  category: Category;
  limit?: number;
};

const PostByCategory: React.FC<Props> = ({ category, limit }) => {
  const posts = getPostsByCategory(category, limit);

  return (
    <div className="sm:flex sm:flex-wrap sm:items-stretch">
      {posts.map((post) => (
        <PostThumbnail key={post.slug} post={post} />
      ))}
    </div>
  );
}

export default PostByCategory;