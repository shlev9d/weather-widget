import { useAppSelector } from '../../store/hooks'

export const DaysList = () => {
	const { list } = useAppSelector(state => state.otherDays.otherDays)
	const date = new Date().toLocaleDateString('en-ca')
	const actualHour = new Date().getHours()
	const refrechHours = [0, 3, 6, 9, 12, 15, 18, 21]

	const hoursForList = refrechHours.sort(
		(a, b) => Math.abs(actualHour - a) - Math.abs(actualHour - b)
	)[0]

	const otherDays = list?.filter(
		item =>!item.dt_txt?.includes(date) && item.dt_txt?.includes(`${hoursForList}:00:00`) 
	)	

	return otherDays
}
