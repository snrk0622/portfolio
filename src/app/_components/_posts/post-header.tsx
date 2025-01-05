import { FaRegCalendarAlt } from "react-icons/fa";
import DateFormatter from "@/app/_components/_common/utils/date-formatter";

type Props = {
  title: string;
  date: string;
};

const PostHeader: React.FC<Props> = ({ title, date }) => {
  return (
    <div className="w-5/6 mx-auto my-20">
      <h1 className="text-4xl leading-relaxed font-bold mb-5">{ title }</h1>
      <div className="flex items-center justify-center text-sm opacity-50">
        <FaRegCalendarAlt className="mr-1" />
        <DateFormatter dateString={date} />
      </div>
    </div>
  );
}

export default PostHeader;