import { getPostsCountAt } from '@/lib/api/post'
import { format } from 'date-fns'

type Props = {
  date: Date
  isTarget?: boolean
  wrapperClass: string
  activeOpacityClass: string
  disactiveOpacityClass: string
}

const CalendarSquare: React.FC<Props> = ({
  date,
  isTarget = true,
  wrapperClass,
  activeOpacityClass,
  disactiveOpacityClass,
}) => {
  const displayMonth = format(date, 'M/')
  const displayDate = format(date, 'd')
  const count: number = getPostsCountAt(date)
  const opacity = count > 0 ? activeOpacityClass : disactiveOpacityClass
  return (
    <div
      className={`w-1/2 aspect-square p-0.5 ${isTarget ? '' : 'opacity-50'}`}
    >
      <div className={`w-full h-full ${wrapperClass} ${opacity}`}>
        {displayDate == '1' && <span>{displayMonth}</span>}
        <span className={count > 0 ? 'opacity-100' : 'opacity-80'}>
          {displayDate}
        </span>
      </div>
    </div>
  )
}

export default CalendarSquare
