import CalendarSquare from '@/app/_components/_common/_side-column/_calendar-card/_calendar/calendar-square'
import { DateWithTarget, getDatesFor } from '@/lib/api/utils'

type Props = {
  displayMonth?: number
}

const Calendar: React.FC<Props> = ({ displayMonth = 3 }) => {
  const targetDates = getDatesFor(displayMonth)

  // 曜日ごとにグループ化
  const daysOfWeek: DateWithTarget[][] = Array.from({ length: 7 }, () => [])

  targetDates.forEach((date) => {
    const dayOfWeek = (date.date.getDay() + 6) % 7
    daysOfWeek[dayOfWeek].push(date)
  })

  const wrapperClass =
    'bg-light-sub dark:bg-dark-sub border border-light-sub dark:border-dark-sub text-center text-5xs flex items-center justify-center'

  const activeOpacityClass = 'text-light-base dark:text-dark-base'
  const disactiveOpacityClass =
    'bg-opacity-10 border-opacity-20 dark:bg-opacity-10 dark:border-opacity-20'

  return (
    <div>
      <div>
        {daysOfWeek.map((dates, index) => (
          <div key={index} className="flex">
            {dates.map((date, idx) => (
              <CalendarSquare
                key={idx}
                date={date.date}
                isTarget={date.isTarget}
                wrapperClass={wrapperClass}
                activeOpacityClass={activeOpacityClass}
                disactiveOpacityClass={disactiveOpacityClass}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="mt-4 text-sm">
        <div className="mb-1">Notes.</div>
        <div>
          <div className="flex items-center mb-1">
            <div
              className={`${wrapperClass} w-5 h-5 mr-2 ${activeOpacityClass}`}
            >
              <span className="opacity-100">d</span>
            </div>
            <div className="opacity-80">: 記事が投稿された日</div>
          </div>
          <div className="flex items-center mb-1">
            <div
              className={`${wrapperClass} w-5 h-5 mr-2 ${disactiveOpacityClass}`}
            >
              <span className="opacity-80">d</span>
            </div>
            <div className="opacity-80">: 記事が投稿されていない日</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar
