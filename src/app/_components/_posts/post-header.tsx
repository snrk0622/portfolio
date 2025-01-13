import DateFormatter from '@/app/_components/_common/utils/date-formatter'
import { FaRegCalendarAlt } from 'react-icons/fa'

type Props = {
  title: string
  date: string
}

const PostHeader: React.FC<Props> = ({ title, date }) => {
  return (
    <div className="w-full sm:w-5/6 mx-auto my-10 sm:my-20">
      <h1 className="text-3xl lg:text-4xl leading-relaxed font-bold mb-5 text-center">
        {title}
      </h1>
      <div className="flex items-center justify-center text-sm opacity-50">
        <FaRegCalendarAlt className="mr-1" />
        <DateFormatter dateString={date} />
      </div>
    </div>
  )
}

export default PostHeader
