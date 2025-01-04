import { Metadata } from "next";
import { getPostsByTag } from "@/lib/api/post";
import { getAllTags } from "@/lib/api/tag";
import { CMS_NAME } from "@/lib/constants";
import { Post } from "@/interfaces/post";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { MoreStories } from "@/app/_components/more-stories";

export default async function TagPage(props: Params) {
  const params = await props.params;
  const posts: Post[] = getPostsByTag(params.tag);
  return (
      <main>
        <Container>
          <Header />
          <Container>
            {posts.length > 0 && <MoreStories posts={posts} />}
          </Container>
        </Container>
      </main>
  );
}

type Params = {
  params: Promise<{
    tag: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const tagName = params.tag;

  const title = `${tagName} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title,
    openGraph: {
      title,
      // images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const tags = getAllTags();

  return tags.map((tag) => ({
    tag: tag.name,
  }));
}
