import axios from 'axios'

const ACCESS_KEY = import.meta.env.VITE_WEATHERSTACK_API_KEY

const weatherApi = axios.create({
  baseURL: 'http://api.weatherstack.com/',
  data: {
    access_key: ACCESS_KEY,
  },
})

interface IWeatherFromLongLatProps {
  long: number
  lat: number
}

export const getCurrentWeatherFromLongLat = ({
  long,
  lat,
}: IWeatherFromLongLatProps) =>
  weatherApi.get('/current', {
    data: {
      query: `${lat},${long}`,
    },
  })

export const getCurrentWeatherFromCity = (city: string) =>
  weatherApi.get('/current', {
    data: {
      query: city,
    },
  })

export const getWeekForecastFromCity = (city: string) =>
  weatherApi.get('/forecast', {
    data: {
      query: city,
      forecast_days: 7,
    },
  })

export const getWeekForecastFromLongLat = ({
  long,
  lat,
}: IWeatherFromLongLatProps) =>
  weatherApi.get('/forecast', {
    data: {
      query: `${lat},${long}`,
      forecast_days: 7,
    },
  })
