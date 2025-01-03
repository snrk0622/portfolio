import MainColumn from "@/app/_components/_top/main-column";
import SideColumn from "@/app/_components/_top/side-column";
import PostsContent from "./_components/_top/_main-column/posts-content";

const TopPage: React.FC = () => {
  return (
    <div className="md:flex md:flex-row-reverse">
      <SideColumn>
        side
      </SideColumn>
      <MainColumn>
        <PostsContent title="Recent Blogs." category="blog" limit={6} />
        <PostsContent title="Works." category="work" />
      </MainColumn>
    </div>
  );
}

export default TopPage;
