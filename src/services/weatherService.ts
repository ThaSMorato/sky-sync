import axios from 'axios'

const ACCESS_KEY = import.meta.env.VITE_WEATHER_API_KEY

export interface CurrentWeatherResponse {
  location: {
    name: string
    region: string
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
        date: string
        day: {
          maxtemp_c: number
          maxtemp_f: number
          mintemp_c: number
          mintemp_f: number
          avgtemp_c: number
          avgtemp_f: number
          condition: {
            icon: string
          }
        }
      },
    ]
  }
}

const weatherApi = axios.create({
  baseURL: 'https://api.weatherapi.com/v1/',
  params: {
    key: ACCESS_KEY,
  },
})

export const getWeekForecastFromCity = (city: string) =>
  weatherApi.get<ForecastResponse>('/forecast.json', {
    params: {
      q: city,
      days: 9,
    },
  })
