import MainColumn from "@/app/_components/_top/main-column";
import SideColumn from "@/app/_components/_top/side-column";
import PostsContent from "./_components/_top/_main-column/posts-content";
import IntroCard from "./_components/_top/_side-column/intro-card";

const TopPage: React.FC = () => {
  return (
    <div className="md:flex md:flex-row-reverse">
      <SideColumn>
        <IntroCard />
      </SideColumn>
      <MainColumn>
        <PostsContent title="Recent Blogs." category="blog" limit={6} />
        <PostsContent title="Works." category="work" />
      </MainColumn>
    </div>
  );
}

export default TopPage;
