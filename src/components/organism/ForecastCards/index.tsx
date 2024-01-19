import { Text } from '@/components/atoms/Text'
import { CurrentWeatherCard } from '@/components/molecules/CurrentWeatherCard'
import { ForecastCard } from '@/components/molecules/ForecastCard'

import {
  ForecastCardsBody,
  ForecastCardsContainer,
  ForecastCardsForecast,
  ForecastCardsHeader,
} from './styles'

const currentWeather = {
  humidity: 61,
  temperature: {
    celcius: 28,
    fahrenheit: 85,
  },
  weather_description: 'Cloudy',
  weather_icon: 'https://picsum.photos/200',
  wind_speed: {
    kilometers: 7,
    miles: 5,
  },
}

const forecastWeather = {
  average_temperature: {
    celcius: 32,
    fahrenheit: 85,
  },
  max_temperature: {
    celcius: 40,
    fahrenheit: 90,
  },
  min_temperature: {
    celcius: 18,
    fahrenheit: 50,
  },
  date: '2023-01-30',
  weather_icon: 'https://picsum.photos/200',
}

export const ForecastCards = () => {
  return (
    <ForecastCardsContainer as="main">
      <ForecastCardsHeader>
        <Text font="mono" color="city" size="xl">
          Jaboticabal, Sao Paulo
        </Text>
      </ForecastCardsHeader>
      <ForecastCardsBody>
        <div>
          <CurrentWeatherCard currentWeather={currentWeather} />
        </div>
        <ForecastCardsForecast>
          {Array.from({ length: 9 }).map((_, index) => (
            <ForecastCard key={index} forecastWeather={forecastWeather} />
          ))}
        </ForecastCardsForecast>
      </ForecastCardsBody>
    </ForecastCardsContainer>
  )
}
