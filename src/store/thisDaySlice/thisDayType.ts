   export type IThisDay = {
			weather: IWeather[]
			main: IMain
			wind: IWind
			name: string
			dt: number
			dt_txt?: string
		}
   
  

    type IWeather = {
        id: number;
        main: string;
        description: string;
        icon: string;
    }

    type IMain = {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level: number;
        grnd_level: number;
    }

   type IWind = {
        speed: number;
        deg: number;
        gust: number;
    }

