import TagChip from "@/app/_components/_common/_posts/_post/_tags/tag-chip";
import { Tag } from "@/interfaces/tag";

type Props = {
  tags: Tag[];
  className?: string;
};

const Tags: React.FC<Props> = ({ tags, className }) => {
  return (
    <div className={'flex flex-wrap ' + className}>
      { tags.map((tag) => (
        <TagChip key={tag.name} tag={tag} />
      ))}
    </div>
  );
}

export default Tags;