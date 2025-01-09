import { Metadata } from "next";
import { BLOG_NAME } from "@/lib/constants";
import SideColumn from "@/app/_components/_common/_side-column/side-column";
import MainColumn from "@/app/_components/_common/_main-column/main-column";
import TagsCard from "@/app/_components/_common/_side-column/tags-card";
import IntroCard from "@/app/_components/_common/_side-column/intro-card";
import { getAllCategories } from "@/lib/api/category";
import CategoryHeader from "@/app/_components/_categories/category-header";
import PostsByCategory from "@/app/_components/_common/_posts/posts-by-category";
import { AuthorData } from "@/data/author";

const CategoryPage: React.FC<Params> = async (props) => {
  const params = await props.params;
  return (
    <div>
      <CategoryHeader category={params.category} />
      <div className="flex flex-wrap">
        <MainColumn>
          <PostsByCategory category={params.category} />
        </MainColumn>
        <hr className="w-full mt-10 mb-16 border-light-sub dark:border-dark-sub block lg:hidden" />
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
    category: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const categoryName = params.category;

  const title = `All ${categoryName} | ${BLOG_NAME}`;

  return {
    title,
    openGraph: {
      title,
      images: [AuthorData.imagePath],
    },
  };
}

export async function generateStaticParams() {
  const categories = getAllCategories();

  return categories.map((category) => ({
    category,
  }));
}

export default CategoryPage;
