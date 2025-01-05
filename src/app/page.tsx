import MainColumn from "@/app/_components/_common/_main-column/main-column";
import SideColumn from "@/app/_components/_common/_side-column/side-column";
import PostsContent from "./_components/_common/_main-column/posts-content";
import IntroCard from "./_components/_common/_side-column/intro-card";
import SkillsCard from "./_components/_common/_side-column/skills-card";
import TagsCard from "./_components/_common/_side-column/tags-card";

const TopPage: React.FC = () => {
  return (
    <div className="md:flex md:flex-row-reverse">
      <SideColumn>
        <IntroCard />
        <SkillsCard />
        <TagsCard />
      </SideColumn>
      <MainColumn>
        <PostsContent title="Recent Blogs." category="blog" limit={6} />
        <PostsContent title="Works." category="work" />
      </MainColumn>
    </div>
  );
}

export default TopPage;
