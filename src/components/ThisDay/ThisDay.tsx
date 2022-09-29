import Day from './Day/Day'
import DayInfo from './DayInfo/DayInfo'
import s from './thisDay.module.scss'

type Props = {}

const ThisDay = (props: Props) => {
  return (
    <div className={s.wrapper}>
      <Day />
      <DayInfo />
    </div>
  )
}

export default ThisDay