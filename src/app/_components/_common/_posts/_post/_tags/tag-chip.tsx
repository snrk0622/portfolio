import { Tag } from "@/interfaces/tag";
import Link from "next/link";
import { FaHashtag } from "react-icons/fa";

type Props = {
  tag: Tag;
}

const TagChip: React.FC<Props> = ({ tag }) => {
  return (
    <Link href={`/tags/${tag.name}`} key={tag.name} className="flex items-center border rounded-md px-2 py-1 mr-2 my-1 text-xs bg-gray-300 bg-opacity-20">
      { tag.icon ? <tag.icon className="mr-2" /> : <FaHashtag className="mr-2" /> }
      <span>{ tag.name }</span>
    </Link>
  );
}

export default TagChip;