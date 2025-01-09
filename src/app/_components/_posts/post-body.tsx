import markdownStyles from "@/app/_components/_posts/markdown-styles.module.css";
import Tags from "@/app/_components/_common/_tags/tags";
import { Tag } from "@/interfaces/tag";

type Props = {
  tags: Tag[];
  content: string;
};

const PostBody: React.FC<Props> = ({ tags, content }) => {
  return (
    <div className="mb-10">
      <div className={`lg:border border-light-sub dark:border-dark-sub`}>
        <div className="p-1 sm:p-4 lg:p-6">
          <Tags tags={tags} />
          <div className="znc">
              <div
                className={`target-toc ${markdownStyles["markdown"]}`}
                dangerouslySetInnerHTML={{ __html: content }}
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostBody;
