import logo from '../assets/weatherIcon/02d.png'
import logoDark from '../assets/weatherIcon/02d-night.png'

import ligthTheme from '../assets/weatherIcon/01d.png'
import darkTheme from '../assets/image/darkTheme.png'

import cloud from '../assets/image/cloud.png'
import cloudDark from '../assets/image/cloudDark.png'

import clear from '../assets/weatherIcon/01d.png'
import clearNight from '../assets/weatherIcon/01d-night.png'

import fewClouds from '../assets/weatherIcon/02d.png'
import fewCloudsNight from '../assets/weatherIcon/02d-night.png'

import sClouds from '../assets/weatherIcon/03d.png'
import sCloudsNight from '../assets/weatherIcon/03d-night.png'

import bClouds from '../assets/weatherIcon/04d.png'
import bCloudsNight from '../assets/weatherIcon/04d-night.png'

import sRain from '../assets/weatherIcon/09d.png'
import sRainNight from '../assets/weatherIcon/09d-night.png'

import rain from '../assets/weatherIcon/10d.png'
import rainNight from '../assets/weatherIcon/10d-night.png'

import mist from '../assets/weatherIcon/50d.png'
import mistNight from '../assets/weatherIcon/50d-night.png'

import thunderstorm from '../assets/weatherIcon/11d.png'

import snow from '../assets/weatherIcon/11d.png'

import { useAppSelector } from '../store/hooks'

type Props = {
	id: string
}

const AppIcons = ({ id }: Props) => {
	const theme = useAppSelector(state => state.theme.theme)
	let icon
	switch (id) {
		case 'logo':
			theme === 'light' ? (icon = logo) : (icon = logoDark)
			break
		case 'changeTheme':
			theme === 'light' ? (icon = ligthTheme) : (icon = darkTheme)
			break
		case 'cloud':
			theme === 'light' ? (icon = cloud) : (icon = cloudDark)
			break
		case '01d':
			icon = clear
      break
		case '01n':
			icon = clearNight
      break
		case '02d':
			icon = fewClouds
			break
		case '02n':
			icon = fewCloudsNight
			break
		case '03d':
			icon = sClouds
			break
		case '03n':
			icon = sCloudsNight
			break
		case '04d':
			icon = bClouds
			break
		case '04n':
			icon = bCloudsNight
			break
		case '09d':
		icon = sRain
			break
		case '09n':
		icon = sRainNight
			break
		case '10d':
			icon = rain
			break
		case '10n':
			icon = rainNight
			break
		case '11d':
			icon = thunderstorm
			break
		case '11n':
			icon = thunderstorm
			break
		case '13d':
			icon = snow
			break
		case '13n':
			icon = snow
			break
		case '50d':
		icon = mist
			break
		case '50n':
		icon = mistNight
			break
	}

	return <img src={icon} alt='img' />
}

export default AppIcons
