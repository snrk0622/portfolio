import MainColumn from "@/app/_components/_common/_main-column/main-column";
import SideColumn from "@/app/_components/_common/_side-column/side-column";
import PostsContent from "./_components/_common/_main-column/posts-content";
import IntroCard from "./_components/_common/_side-column/intro-card";
import SkillsCard from "./_components/_common/_side-column/skills-card";
import TagsCard from "./_components/_common/_side-column/tags-card";
import { Metadata } from "next";
import { BLOG_NAME } from "@/lib/constants";
import { AuthorData } from "@/data/author";

const TopPage: React.FC = () => {
  return (
    <div className="lg:flex lg:flex-row-reverse">
      <SideColumn>
        <IntroCard />
        <SkillsCard />
        <TagsCard className="hidden sm:block" />
      </SideColumn>
      <MainColumn>
        <PostsContent title="Recent Blogs." category="blog" limit={6} />
        <PostsContent title="Works." category="work" />
        <TagsCard className="block sm:hidden" />
      </MainColumn>
    </div>
  );
}

export function generateMetadata(): Metadata {
  return {
    title: BLOG_NAME,
    openGraph: {
      title: BLOG_NAME,
      images: [AuthorData.imagePath],
    },
  };
}

export default TopPage;
