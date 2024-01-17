import {
  ForecastCard,
  ForecastWeatherUnique,
} from '@/components/organism/ForecastCard'

import { ForecastsContainer } from './styles'

export type ForecastWeather = Array<ForecastWeatherUnique>

interface ForecastCardsProps {
  forecastWeather: ForecastWeather
}

export const ForecastCards = ({ forecastWeather }: ForecastCardsProps) => {
  return (
    <ForecastsContainer>
      {forecastWeather.map((forecastWeather) => (
        <ForecastCard
          forecastWeather={forecastWeather}
          key={JSON.stringify(forecastWeather)}
        />
      ))}
    </ForecastsContainer>
  )
}
