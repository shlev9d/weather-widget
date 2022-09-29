import s from './day.module.scss'
import { useAppSelector } from '../../../store/hooks'
import AppIcons from '../../../assets/AppIcons'
import { getDate } from '../../../config'

type Props = {}

const Day = (props: Props) => {
	const { main, name, weather } = useAppSelector(state => state.thisDay.thisDay)

	const date = getDate(`${new Date()}`)

	return (
		<div className={s.day}>
			<article className={s.topBlock}>
				<div className={s.wrapper}>
					<div className={s.temp}>{Math.round(main?.temp)}°</div>
					<b className={s.thisDay}>Today</b>
				</div>
				<div className={s.logo}>
					<AppIcons id={weather && weather[0].icon} />
				</div>
			</article>
			<article className={s.bottomBlock}>
				<b className={s.city}> {name}</b>
				<span className={s.time}>{date}</span>
			</article>
		</div>
	)
}

export default Day
