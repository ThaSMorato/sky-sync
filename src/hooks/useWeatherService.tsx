import { useMemo } from 'react'

import { fromCurrentForecastToWeatherForecast } from '@/dto/weatherDto'
import {
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

export const useWeatherService = () => {
  const fetchForecastWithCoordenates = useMemo(
    () =>
      async ({ lat, long }: Coordenates) => {
        const { data } = await getCurrentWeatherFromLongLat({ lat, long })
        console.log(data)
        const { forecast, ...current } =
          fromCurrentForecastToWeatherForecast(data)
        return {
          forecast,
          current,
        }
      },
    [],
  )

  const fetchForecastWithCity = async ({ city }: City) => {
    const { data } = await getWeekForecastFromCity(city)
    const { forecast, ...current } = fromCurrentForecastToWeatherForecast(data)
    return {
      forecast,
      current,
    }
  }

  return {
    fetchForecastWithCoordenates,
    fetchForecastWithCity,
  }
}
