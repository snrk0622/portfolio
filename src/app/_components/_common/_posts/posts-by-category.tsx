import PostThumbnail from '@/app/_components/_common/_posts/_post/post-thumbnail'
import { Category } from '@/interfaces/category'
import { getPostsByCategory } from '@/lib/api/post'

type Props = {
  category: Category
  limit?: number
}

const PostByCategory: React.FC<Props> = ({ category, limit }) => {
  const posts = getPostsByCategory(category, limit)

  return (
    <div className="sm:flex sm:flex-wrap sm:items-stretch">
      {posts.length ? (
        posts.map((post, index) => (
          <PostThumbnail
            key={post.slug}
            post={post}
            isFirst={index == 0}
            isLast={index == posts.length - 1}
          />
        ))
      ) : (
        <div className="opacity-20">coming soon ...</div>
      )}
    </div>
  )
}

export default PostByCategory
