import { Metadata } from "next";
import { notFound } from "next/navigation";
import m2h from 'zenn-markdown-html';
import { getAllPosts, getPostBySlug } from "@/lib/api/post";
import { CMS_NAME } from "@/lib/constants";
import Alert from "@/app/_components/_posts/alert";
import SideColumn from "@/app/_components/_common/_side-column/side-column";
import MainColumn from "@/app/_components/_common/_main-column/main-column";
import IntroCard from "@/app/_components/_common/_side-column/intro-card";
import TagsCard from "@/app/_components/_common/_side-column/tags-card";
import { PostBody } from "@/app/_components/_posts/post-body";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = m2h(post.content || '', {
    embedOrigin: "https://embed.zenn.studio",
  });

  return (
    <div>
      {post.preview && <Alert />}
      <div className="md:flex md:flex-row-reverse">
        <SideColumn>
          <IntroCard />
          <TagsCard />
        </SideColumn>
        <MainColumn>
          <PostBody content={content} />
        </MainColumn>
      </div>
    </div>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
