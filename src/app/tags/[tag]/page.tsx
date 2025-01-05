import { Metadata } from "next";
import { getPostsByTag } from "@/lib/api/post";
import { getAllTags, getTagByName } from "@/lib/api/tag";
import { CMS_NAME } from "@/lib/constants";
import { Post } from "@/interfaces/post";
import SideColumn from "@/app/_components/_common/_side-column/side-column";
import MainColumn from "@/app/_components/_common/_main-column/main-column";
import TagsCard from "@/app/_components/_common/_side-column/tags-card";
import SkillsCard from "@/app/_components/_common/_side-column/skills-card";
import IntroCard from "@/app/_components/_common/_side-column/intro-card";
import { Tag } from "@/interfaces/tag";
import TagHeader from "@/app/_components/_tags/tag-header";
import PostsByTag from "@/app/_components/_common/_posts/posts-by-tag";

const TagPage: React.FC<Params> = async (props) => {
  const params = await props.params;
  const tag = getTagByName(params.tag) as Tag;
  const posts: Post[] = getPostsByTag(params.tag);
  return (
    <div>
      <TagHeader tag={tag} />
      <div className="flex flex-wrap">
        <MainColumn>
          <PostsByTag tag={tag} />
        </MainColumn>
        <hr className="w-full mt-10 mb-16 border-light-sub dark:border-dark-sub block md:hidden" />
        <SideColumn>
          <IntroCard />
          <TagsCard />
        </SideColumn>
      </div>
    </div>
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

export default TagPage;
