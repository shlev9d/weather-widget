export type IDays = {
	list: List[]
}

export type Main = {
	temp: number
	feels_like: number
	temp_min: number
	temp_max: number
	pressure: number
	sea_level: number
	grnd_level: number
	humidity: number
	temp_kf: number
}

export type Weather = {
	id: number
	main: string
	description: string
	icon: string
}

export type Wind = {
	speed: number
	deg: number
	gust: number
}

export type List = {
	dt: number
	main: Main
	weather: Weather[]
	wind: Wind
	visibility: number
	pop: number
	dt_txt: string
}
