import axios from 'axios'

const ACCESS_KEY = import.meta.env.VITE_WEATHER_API_KEY

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
  weatherApi.get('/current.json', {
    data: {
      q: city,
    },
  })

export const getWeekForecastFromCity = (city: string) =>
  weatherApi.get('/forecast.json', {
    data: {
      q: city,
      days: 7,
    },
  })

export const getCurrentWeatherFromLongLat = ({
  long,
  lat,
}: IWeatherFromLongLatProps) =>
  weatherApi.get('/forecast.json', {
    data: {
      q: `${lat},${long}`,
      days: 7,
    },
  })
