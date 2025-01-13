import {
  addDays,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
} from 'date-fns'

export type DateWithTarget = {
  date: Date
  isTarget: boolean
}

export const getDatesFor = (displayMonth: number): DateWithTarget[] => {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth()
  const firstDate = startOfMonth(new Date(year, month - (displayMonth - 1)))
  const lastDate = endOfMonth(new Date(year, month))

  // カレンダーの開始日を月曜日に設定
  const startCalendarDate = startOfWeek(firstDate, { weekStartsOn: 1 })
  const endCalendarDate = endOfWeek(lastDate, { weekStartsOn: 1 })

  const dates = []
  let currentDate = startCalendarDate

  while (currentDate <= endCalendarDate) {
    dates.push({
      date: currentDate,
      isTarget: currentDate >= firstDate && currentDate <= lastDate,
    })
    currentDate = addDays(currentDate, 1)
  }
  return dates
}
