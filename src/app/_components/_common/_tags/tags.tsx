import TagChip from "@/app/_components/_common/_tags/tag-chip";
import { Tag } from "@/interfaces/tag";

type Props = {
  tags: Tag[];
  displayCount?: boolean;
  className?: string;
};

const Tags: React.FC<Props> = ({ tags, displayCount = false, className }) => {
  return (
    <div className={'flex flex-wrap ' + className}>
      { tags.map((tag) => (
        <TagChip key={tag.name} tag={tag} displayCount={displayCount} />
      ))}
    </div>
  );
}

export default Tags;