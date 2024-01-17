import axios from 'axios'

const ACCESS_KEY = import.meta.env.VITE_WEATHER_API_KEY

export interface CurrentWeatherResponse {
  location: {
    name: string
  }
  current: {
    temp_c: number
    temp_f: number
    condition: {
      text: string
      icon: string
    }
    wind_mph: number
    wind_kph: number
    humidity: number
  }
}

export interface ForecastResponse extends CurrentWeatherResponse {
  forecast: {
    forecastday: [
      {
        maxtemp_c: number
        maxtemp_f: number
        mintemp_c: number
        mintemp_f: number
        avgtemp_c: number
        avgtemp_f: number
        maxwind_mph: number
        maxwind_kph: number
        avghumidity: number
        condition: {
          text: string
          icon: string
        }
        totalprecip_mm: number
        totalprecip_in: number
        daily_will_it_rain: number
        daily_chance_of_rain: number
        daily_will_it_snow: number
        daily_chance_of_snow: number
      },
    ]
  }
}

const weatherApi = axios.create({
  baseURL: 'http://api.weatherapi.com/v1/',
  data: {
    key: ACCESS_KEY,
  },
})

interface IWeatherFromLongLatProps {
  long: number
  lat: number
}

export const getCurrentWeatherFromCity = (city: string) =>
  weatherApi.get<CurrentWeatherResponse>('/current.json', {
    data: {
      q: city,
    },
  })

export const getWeekForecastFromCity = (city: string) =>
  weatherApi.get<ForecastResponse>('/forecast.json', {
    data: {
      q: city,
      days: 7,
    },
  })

export const getCurrentWeatherFromLongLat = ({
  long,
  lat,
}: IWeatherFromLongLatProps) =>
  weatherApi.get<ForecastResponse>('/forecast.json', {
    data: {
      q: `${lat},${long}`,
      days: 7,
    },
  })
