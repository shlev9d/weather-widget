import AppIcons from '../../../assets/AppIcons'
import { List } from '../../../store/otherDaysSlice/otherDaysType'
import s from './otherDaysInfo.module.scss'
import { getDate, getDay } from '../../../config';

type Props = {
	item: List
}
const OtherDaysInfo = ({ item }: Props) => {
	const { weather, main, wind, dt_txt } = item
	const day = getDay(dt_txt)
	const date = getDate(dt_txt)
	

	return (
		<div className={s.otherDaysInfo}>
			<b className={s.day}>{day}</b>
			<b className={s.dayInfo}>{date}</b>
			<div className={s.icon}>
				<AppIcons id={weather && weather[0].icon} />
			</div>
			<b className={s.tempDay}>
				{Math.round(main?.temp)}° ({Math.round(main?.feels_like)}
				°)
			</b>
			<span className={s.precipitation}>
				{Math.round(main?.pressure / 1.33)} mm Hg
			</span>
			<span className={s.wind}>{Math.round(wind?.speed)} m/s</span>
			<div className={s.info}>{weather && weather[0].description}</div>
		</div>
	)
}

export default OtherDaysInfo
