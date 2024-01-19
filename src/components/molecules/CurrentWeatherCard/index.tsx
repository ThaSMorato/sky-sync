import { Text } from '@/components/atoms/Text'
import { Humidity } from '@/components/molecules/Humidity'
import { WeatherTemperature } from '@/components/molecules/WeatherTemperature'
import { WindSpeed } from '@/components/molecules/WindSpeed'

import {
  CurrentImageContainer,
  CurrentWeatherContainer,
  CurrentWeatherGrid,
} from './styles'

interface CurrentWeather {
  temperature: {
    celcius: number
    fahrenheit: number
  }
  weather_icon: string
  weather_description: string
  wind_speed: {
    miles: number
    kilometers: number
  }
  humidity: number
}

interface CurrentWeatherCardProps {
  currentWeather: CurrentWeather
}

export const CurrentWeatherCard = ({
  currentWeather,
}: CurrentWeatherCardProps) => {
  return (
    <CurrentWeatherContainer shaddow="withShaddow">
      <CurrentWeatherGrid>
        <CurrentImageContainer>
          <img
            src={currentWeather.weather_icon}
            alt={currentWeather.weather_description}
          />
        </CurrentImageContainer>
      </CurrentWeatherGrid>
      <CurrentWeatherGrid>
        <Text font="roboto" size="xl" color="description" weight="bold">
          {currentWeather.weather_description}
        </Text>
      </CurrentWeatherGrid>
      <CurrentWeatherGrid>
        <WeatherTemperature temperature={currentWeather.temperature} />
      </CurrentWeatherGrid>
      <CurrentWeatherGrid>
        <WindSpeed windSpeed={currentWeather.wind_speed} />
      </CurrentWeatherGrid>
      <CurrentWeatherGrid>
        <Humidity humidity={currentWeather.humidity} />
      </CurrentWeatherGrid>
    </CurrentWeatherContainer>
  )
}
