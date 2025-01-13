import PostByCategory from '@/app/_components/_common/_posts/posts-by-category'
import { Category } from '@/interfaces/category'
import MainColumnContainer from './_common/main-column-container'

type Props = {
  title: string
  category: Category
  limit?: number
}

const PostsContent: React.FC<Props> = ({ title, category, limit }) => {
  return (
    <MainColumnContainer title={title} category={category} border={false}>
      <PostByCategory category={category} limit={limit} />
    </MainColumnContainer>
  )
}

export default PostsContent
