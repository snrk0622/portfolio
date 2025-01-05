import { Post } from "@/interfaces/post";
import SideColumnContainer from "../_common/_side-column/_common/side-column-container";
import PostThumbnail from "../_common/_posts/_post/post-thumbnail";
import { getPostBySlug } from "@/lib/api/post";

type Props = {
  posts: string[];
};

const RelatedPostsCard: React.FC<Props> = ({ posts }) => {
  return (
    <SideColumnContainer title="Related Contents." border={false}>
      {posts.map((postName) => {
        const post: Post = getPostBySlug(postName);
        return <PostThumbnail key={postName} post={post} isFullWidth />;
      })}
    </SideColumnContainer>
  );
}

export default RelatedPostsCard;
