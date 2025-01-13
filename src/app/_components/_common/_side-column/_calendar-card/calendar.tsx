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

  return (
    <div>
      <div></div>
      <div>
        {daysOfWeek.map((dates, index) => (
          <div key={index} className="flex">
            {dates.map((date, idx) => (
              <CalendarSquare
                key={idx}
                date={date.date}
                isTarget={date.isTarget}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calendar
