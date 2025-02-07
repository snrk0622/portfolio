import { format, parseISO } from 'date-fns'

type Props = {
  dateString: string
}

const DateFormatter: React.FC<Props> = ({ dateString }) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'yyyy/MM/dd')}</time>
}

export default DateFormatter
