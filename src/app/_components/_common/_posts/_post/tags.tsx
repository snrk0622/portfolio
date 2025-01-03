import Tag from "@/app/_components/_common/_posts/_post/_tags/tag";

type Props = {
  tags: string[];
  className?: string;
};

const Tags: React.FC<Props> = ({ tags, className }) => {
  return (
    <div className={'flex flex-wrap ' + className}>
      { tags.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </div>
  );
}

export default Tags;