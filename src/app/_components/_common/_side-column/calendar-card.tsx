import Calendar from '@/app/_components/_common/_side-column/_calendar-card/calendar'
import SideColumnContainer from '@/app/_components/_common/_side-column/_common/side-column-container'

const CalendarCard: React.FC = () => {
  return (
    <SideColumnContainer title="Calendar." border={true}>
      <div className="block sm:hidden">
        <Calendar displayMonth={2} />
      </div>
      <div className="hidden sm:block md:hidden">
        <Calendar displayMonth={4} />
      </div>
      <div className="hidden md:block lg:hidden">
        <Calendar displayMonth={6} />
      </div>
      <div className="hidden lg:block xl:hidden">
        <Calendar displayMonth={1} />
      </div>
      <div className="hidden xl:block 2xl:hidden">
        <Calendar displayMonth={2} />
      </div>
      <div className="hidden 2xl:block">
        <Calendar displayMonth={3} />
      </div>
    </SideColumnContainer>
  )
}

export default CalendarCard
