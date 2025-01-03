import Link from 'next/link';

import { Category } from '@/interfaces/category';
import PostByCategory from '@/app/_components/_common/_posts/posts-by-category';

type Props = {
  title: string;
  category: Category;
  limit?: number;
};

const PostsContent: React.FC<Props> = ({ title, category, limit }) => {
  return (
    <div className='mb-10'>
      <div className="flex justify-between items-center">
        <h2 className="mb-2 text-5xl font-bold">{ title }</h2>
        <Link href={`/categories/${category}`}>see more ...</Link>
      </div>
      <PostByCategory category={category} limit={limit} />
    </div>
  );
}

export default PostsContent;
