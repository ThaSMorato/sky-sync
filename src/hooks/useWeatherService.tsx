import { AxiosError } from 'axios'

import {
  fromCurrentForecastToWeatherForecast,
  fromCurrentResponseToWeather,
} from '@/dto/weatherDto'
import { WeatherApiError } from '@/errors/weatherApiError'
import {
  getCurrentWeatherFromCity,
  getCurrentWeatherFromLongLat,
  getWeekForecastFromCity,
} from '@/services/weatherService'

interface Coordenates {
  long: number
  lat: number
}

interface City {
  city: string
}

interface WeatherApiAxiosError {
  error: {
    code: number
    message: string
  }
}

const errorHandler = (error: unknown) => {
  if (error instanceof AxiosError) {
    const err = error as AxiosError<WeatherApiAxiosError>
    throw new WeatherApiError({
      code: err.code,
      message: err.response?.data.error.message,
    })
  }
  throw error
}

export const useWeatherService = () => {
  const fetchForecastWithCoordenates = async ({ lat, long }: Coordenates) => {
    try {
      const { data } = await getCurrentWeatherFromLongLat({ lat, long })
      const { forecast, ...current } =
        fromCurrentForecastToWeatherForecast(data)
      return {
        forecast,
        current,
      }
    } catch (error) {
      errorHandler(error)
    }
  }

  const fetchForecastWithCity = async ({ city }: City) => {
    try {
      const { data } = await getWeekForecastFromCity(city)
      const { forecast } = fromCurrentForecastToWeatherForecast(data)
      return {
        forecast,
      }
    } catch (error) {
      errorHandler(error)
    }
  }

  const fetchCurrentWeatherWithCity = async ({ city }: City) => {
    try {
      const { data } = await getCurrentWeatherFromCity(city)
      const current = fromCurrentResponseToWeather(data)
      return {
        current,
      }
    } catch (error) {
      errorHandler(error)
    }
  }

  return {
    fetchForecastWithCoordenates,
    fetchForecastWithCity,
    fetchCurrentWeatherWithCity,
  }
}
