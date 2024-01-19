import { fromCurrentForecastToWeatherForecast } from '@/dto/weatherDto'
import { getWeekForecastFromCity } from '@/services/weatherService'

interface City {
  city: string
}

export const useWeatherService = () => {
  const fetchForecastWithCity = async ({ city }: City) => {
    const { data } = await getWeekForecastFromCity(city)
    const { forecast, ...current } = fromCurrentForecastToWeatherForecast(data)
    return {
      forecast,
      current,
    }
  }

  return {
    fetchForecastWithCity,
  }
}
