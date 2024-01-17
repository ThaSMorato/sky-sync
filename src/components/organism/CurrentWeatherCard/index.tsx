import { WeatherTag } from '@/components/atoms/WeatherTag'
import { Humidity } from '@/components/molecules/Humidity'
import { WeatherTemperature } from '@/components/molecules/WeatherTemperature'
import { WindSpeed } from '@/components/molecules/WindSpeed'

import {
  CurrentImageContainer,
  CurrentWeatherContainer,
  CurrentWeatherGrid,
} from './styles'

interface CurrentWeather {
  location_name: string
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
    <CurrentWeatherContainer>
      <CurrentWeatherGrid>
        <CurrentImageContainer>
          <img
            src={currentWeather.weather_icon}
            alt={currentWeather.weather_description}
          />
        </CurrentImageContainer>
        <WeatherTag weather={currentWeather.weather_description} />
      </CurrentWeatherGrid>
      <CurrentWeatherGrid>
        <WeatherTemperature
          title="Temperature"
          temperature={currentWeather.temperature}
        />
      </CurrentWeatherGrid>
      <CurrentWeatherGrid>
        <WindSpeed title="Wind Speed" windSpeed={currentWeather.wind_speed} />
      </CurrentWeatherGrid>
      <CurrentWeatherGrid>
        <Humidity title="Humidity" humidity={currentWeather.humidity} />
      </CurrentWeatherGrid>
    </CurrentWeatherContainer>
  )
}
