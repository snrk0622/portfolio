import { getPostsCountAt } from '@/lib/api/post'
import { format } from 'date-fns'

type Props = {
  date: Date
  isTarget?: boolean
}

const CalendarSquare: React.FC<Props> = ({ date, isTarget = true }) => {
  const displayMonth = format(date, 'M/')
  const displayDate = format(date, 'd')
  const count: number = getPostsCountAt(date)
  const opacity =
    count > 0
      ? 'text-light-base dark:text-dark-base'
      : 'bg-opacity-10 border-opacity-20 dark:bg-opacity-10 dark:border-opacity-20'
  return (
    <div
      className={`w-1/2 aspect-square p-0.5 ${isTarget ? '' : 'opacity-50'}`}
    >
      <div
        className={`w-full h-full bg-light-sub dark:bg-dark-sub ${opacity} border border-light-sub dark:border-dark-sub text-center text-5xs flex items-center justify-center`}
      >
        {displayDate == '1' && <span>{displayMonth}</span>}
        <span className="opacity-80">{displayDate}</span>
      </div>
    </div>
  )
}

export default CalendarSquare
