import AppIcons from '../../../assets/AppIcons'
import s from './dayInfo.module.scss'
import DayItems from './DayItems/DayItems'
import { Item, ListItem } from './ListItem'





const DayInfo = () => {
	const items = ListItem()

	return (
		<div className={s.dayInfo}>
			{items.map((item: Item) => (
				<DayItems key={item.name} item={item} />
			))}
			<div className={s.cloud}>
					<AppIcons id='cloud'/>
			</div>
		</div>
	)
}

export default DayInfo
