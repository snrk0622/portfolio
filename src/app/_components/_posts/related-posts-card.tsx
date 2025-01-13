import { Post } from '@/interfaces/post'
import { getPostBySlug } from '@/lib/api/post'
import PostThumbnail from '../_common/_posts/_post/post-thumbnail'
import SideColumnContainer from '../_common/_side-column/_common/side-column-container'

type Props = {
  posts: string[]
}

const RelatedPostsCard: React.FC<Props> = ({ posts }) => {
  return (
    <SideColumnContainer title="Related Contents." border={false}>
      {posts.map((postName, index) => {
        const post: Post = getPostBySlug(postName)
        return (
          <PostThumbnail
            key={postName}
            post={post}
            isFullWidth
            isFirst={index == 0}
            isLast={index == posts.length - 1}
          />
        )
      })}
    </SideColumnContainer>
  )
}

export default RelatedPostsCard
