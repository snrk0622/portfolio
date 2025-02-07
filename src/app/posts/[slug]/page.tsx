import MainColumn from '@/app/_components/_common/_main-column/main-column'
import IntroCard from '@/app/_components/_common/_side-column/intro-card'
import SideColumn from '@/app/_components/_common/_side-column/side-column'
import TagsCard from '@/app/_components/_common/_side-column/tags-card'
import Alert from '@/app/_components/_posts/alert'
import PostBody from '@/app/_components/_posts/post-body'
import PostHeader from '@/app/_components/_posts/post-header'
import PostToc from '@/app/_components/_posts/post-toc'
import RelatedPostsCard from '@/app/_components/_posts/related-posts-card'
import { AuthorData } from '@/data/author'
import { getAllPosts, getPostBySlug } from '@/lib/api/post'
import { BLOG_NAME } from '@/lib/constants'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import m2h from 'zenn-markdown-html'

export default async function Post(props: Params) {
  const params = await props.params
  const post = getPostBySlug(params.slug)

  if (!post) {
    return notFound()
  }

  const content = m2h(post.content || '', {
    embedOrigin: 'https://embed.zenn.studio',
  })

  return (
    <div>
      {post.preview && <Alert />}
      <PostHeader title={post.title} date={post.date} />
      <div className="lg:flex">
        <MainColumn>
          <PostBody tags={post.tags} content={content} />
        </MainColumn>
        <SideColumn>
          <IntroCard />
          <div className="sticky top-20">
            <div className="hidden lg:block">
              <PostToc />
            </div>
            <hr className="my-5 border-light-sub dark:border-dark-sub" />
            {post.relatedPosts && (
              <RelatedPostsCard posts={post.relatedPosts} />
            )}
            <TagsCard />
          </div>
        </SideColumn>
      </div>
    </div>
  )
}

type Params = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params
  const post = getPostBySlug(params.slug)

  if (!post) {
    return notFound()
  }

  const title = `${post.title} | ${BLOG_NAME}`

  return {
    title,
    openGraph: {
      title,
      images: [AuthorData.imagePath],
    },
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}
