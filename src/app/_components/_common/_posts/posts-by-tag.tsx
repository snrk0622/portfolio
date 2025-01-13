import PostThumbnail from '@/app/_components/_common/_posts/_post/post-thumbnail'
import { Tag } from '@/interfaces/tag'
import { getPostsByTag } from '@/lib/api/post'

type Props = {
  tag: Tag
  limit?: number
}

const PostsByTag: React.FC<Props> = ({ tag, limit }) => {
  const posts = getPostsByTag(tag.name, limit)

  return (
    <div className="sm:flex sm:flex-wrap sm:items-stretch">
      {posts.map((post, index) => (
        <PostThumbnail
          key={post.slug}
          post={post}
          isFirst={index == 0}
          isLast={index == posts.length - 1}
        />
      ))}
    </div>
  )
}

export default PostsByTag
