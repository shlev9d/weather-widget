
import temp from '../../../assets/image/temp.png'
import pressure from '../../../assets/image/pressure.png'
import awind from '../../../assets/image/wind.png'
import precipitation from '../../../assets/image/precipitation.png'
import { useAppSelector } from '../../../store/hooks'

export interface Item {
   icon: string
   name: string
   value: string
}

export const ListItem = () => {
const { main, weather, wind } = useAppSelector(
			state => state.thisDay.thisDay
		)

		let items: Item[] = [
			{
				icon: temp,
				name: 'temperature',
				value: `${Math.round(main?.temp)}° - feels like ${Math.round(
					main?.feels_like
				)}°`,
			},
			{
				icon: pressure,
				name: 'pressure',
				value: `${Math.round(main?.pressure / 1.33)} mm Hg`,
			},
			{
				icon: precipitation,
				name: 'precipitation',
				value: `${weather && weather[0].description}`,
			},
			{
				icon: awind,
				name: 'wind',
				value: `${Math.round(wind?.speed)} m/s - ${
					wind?.deg <= 22.5
						? 'north'
						: wind?.deg <= 67.5
						? 'north-east'
						: wind?.deg <= 112.5
						? 'east'
						: wind?.deg <= 157.5
						? 'south-east'
						: wind?.deg <= 202.5
						? 'south'
						: wind?.deg <= 247.5
						? 'south-west'
						: wind?.deg <= 292.5
						? 'west'
						: wind?.deg <= 337.5
						? 'north-west'
						: 'north'
				} `,
			},
		]

		return items
 }