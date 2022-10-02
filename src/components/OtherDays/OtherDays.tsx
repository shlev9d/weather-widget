import s from './otherDays.module.scss'
import OtherDaysInfo from './OtherDaysInfo/OtherDaysInfo'
import { DaysList } from './DaysList'



const OtherDays = () => {
const daysList = DaysList()
	
	return (
		<>
			<div className={s.otherDays}>
				{daysList &&
					daysList.map(item => <OtherDaysInfo key={item.dt} item={item} />)}
			</div>
		</>
	)
}

export default OtherDays
