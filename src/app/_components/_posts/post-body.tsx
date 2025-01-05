import MainColumnContainer from "@/app/_components/_common/_main-column/_common/main-column-container";
import markdownStyles from "@/app/_components/_posts/markdown-styles.module.css";
import Tags from "@/app/_components/_common/_tags/tags";
import { Tag } from "@/interfaces/tag";

type Props = {
  tags: Tag[];
  content: string;
};

const PostBody: React.FC<Props> = ({ tags, content }) => {
  return (
    <MainColumnContainer border={true}>
      <div className="p-6">
        <Tags tags={tags} />
        <div className="znc">
            <div
              className={`target-toc ${markdownStyles["markdown"]}`}
              dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
      </div>
    </MainColumnContainer>
  );
}

export default PostBody;
