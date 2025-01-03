import Link from "next/link";
import { FaHashtag } from "react-icons/fa";

type Props = {
  tag: string;
}

const Tag: React.FC<Props> = ({ tag }) => {
  return (
    <Link href={`/tags/${tag}`} key={tag} className="flex items-center border rounded-full px-2 py-1 mr-2 my-1 text-xs">
      <FaHashtag className="mr-1" />
      <span>{ tag }</span>
    </Link>
  );
}

export default Tag;