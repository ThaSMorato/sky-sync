import { Text } from '@/components/atoms/Text'
import { CurrentWeatherCard } from '@/components/molecules/CurrentWeatherCard'
import { ForecastCard } from '@/components/molecules/ForecastCard'
import { useWeathers } from '@/hooks/useWeathers'

import {
  ForecastCardsBody,
  ForecastCardsContainer,
  ForecastCardsForecast,
  ForecastCardsHeader,
} from './styles'

export const ForecastCards = () => {
  const { currentWeather, forecastWeather } = useWeathers()

  return (
    <ForecastCardsContainer as="main">
      <ForecastCardsHeader>
        <Text font="mono" color="city" size="xl" data-cy="location">
          {currentWeather ? currentWeather.location_name : '- - , - -'}
        </Text>
      </ForecastCardsHeader>
      <ForecastCardsBody>
        <div>
          <CurrentWeatherCard currentWeather={currentWeather} />
        </div>
        <ForecastCardsForecast>
          {forecastWeather &&
            forecastWeather.map((forecast) => (
              <ForecastCard
                key={JSON.stringify(forecast)}
                forecastWeather={forecast}
              />
            ))}
        </ForecastCardsForecast>
      </ForecastCardsBody>
    </ForecastCardsContainer>
  )
}
