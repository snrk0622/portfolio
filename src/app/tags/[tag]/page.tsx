import MainColumn from '@/app/_components/_common/_main-column/main-column'
import PostsByTag from '@/app/_components/_common/_posts/posts-by-tag'
import IntroCard from '@/app/_components/_common/_side-column/intro-card'
import SideColumn from '@/app/_components/_common/_side-column/side-column'
import TagsCard from '@/app/_components/_common/_side-column/tags-card'
import TagHeader from '@/app/_components/_tags/tag-header'
import { AuthorData } from '@/data/author'
import { Tag } from '@/interfaces/tag'
import { getAllTags, getTagById } from '@/lib/api/tag'
import { BLOG_NAME } from '@/lib/constants'
import { Metadata } from 'next'

const TagPage: React.FC<Params> = async (props) => {
  const params = await props.params
  const tag = getTagById(params.tag) as Tag
  return (
    <div>
      <TagHeader tag={tag} />
      <div className="flex flex-wrap">
        <MainColumn>
          <PostsByTag tag={tag} />
        </MainColumn>
        <hr className="w-full mt-10 mb-16 border-light-sub dark:border-dark-sub block lg:hidden" />
        <SideColumn>
          <IntroCard />
          <TagsCard />
        </SideColumn>
      </div>
    </div>
  )
}

type Params = {
  params: Promise<{
    tag: string
  }>
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params
  const tagName = params.tag

  const title = `All blog for ${tagName} | ${BLOG_NAME}`

  return {
    title,
    openGraph: {
      title,
      images: [AuthorData.imagePath],
    },
  }
}

export async function generateStaticParams() {
  const tags = getAllTags()

  return tags.map((tag) => ({
    tag: tag.id,
  }))
}

export default TagPage
