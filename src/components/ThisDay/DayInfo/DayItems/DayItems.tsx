import { Item } from '../ListItem'
import s from './dayItems.module.scss'

interface Props {
	item: Item
}

const DayItems = ({ item }: Props) => {

	const { icon, name, value } = item
	return (
		<div className={s.item}>
			<div className={s.icon}>
				<img src={icon} alt='' />
			</div>
			<span>{name}:</span>
			<b>{value}</b>
		</div>
	)
}

export default DayItems
