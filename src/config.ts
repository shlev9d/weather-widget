export const BASE_URL_THIS_DAY = 'https://api.openweathermap.org/data/2.5/weather'

export const BASE_URL_OTHER_DAY = 'https://api.openweathermap.org/data/2.5/forecast'

export const APPID_KEY = 'f4375bd5616e7da3913f900c9c9fcf45'



export const getDay = (date: string) => {
	return new Date(date).toLocaleString('en-us', { weekday: 'long' })
}

export const getDate = (date: string) => {
	return `${new Date(date).toLocaleString('en-us', {
		month: 'long',
	})} ${new Date(date).getDate()}`
}

