import MainColumnContainer from "@/app/_components/_common/_main-column/_common/main-column-container";
import markdownStyles from "@/app/_components/_posts/markdown-styles.module.css";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="znc">
      <MainColumnContainer border={true}>
        <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </MainColumnContainer>
    </div>
  );
}
