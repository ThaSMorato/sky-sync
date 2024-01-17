import { WeatherTag } from '@/components/atoms/WeatherTag'
import { Humidity } from '@/components/molecules/Humidity'
import { PorcentageChanceOf } from '@/components/molecules/PorcentageChanceOf'
import { Precipitations } from '@/components/molecules/Precipitations'
import { WeatherTemperature } from '@/components/molecules/WeatherTemperature'
import { WillIt } from '@/components/molecules/WillItText'
import { WindSpeed } from '@/components/molecules/WindSpeed'

import {
  CurrentImageContainer,
  CurrentWeatherContainer,
  CurrentWeatherGrid,
} from './style'

export interface ForecastWeatherUnique {
  weather_icon: string
  weather_description: string
  max_temperature: {
    celcius: number
    fahrenheit: number
  }
  min_temperature: {
    celcius: number
    fahrenheit: number
  }
  average_temperature: {
    celcius: number
    fahrenheit: number
  }
  max_wind_speed: {
    miles: number
    kilometers: number
  }
  average_humidity: number
  total_precipitation: {
    milimeters: number
    inches: number
  }
  dayli_chances: {
    will_it_rain: boolean
    will_it_snow: boolean
    porcentage_chance_of_rain: number
    porcentage_chance_of_snow: number
  }
}

interface ForecastCardProps {
  forecastWeather: ForecastWeatherUnique
}

export const ForecastCard = ({ forecastWeather }: ForecastCardProps) => {
  return (
    <CurrentWeatherContainer>
      <CurrentWeatherGrid>
        <CurrentImageContainer>
          <img src={forecastWeather.weather_icon} alt="" />
        </CurrentImageContainer>
        <WeatherTag weather={forecastWeather.weather_description} />
      </CurrentWeatherGrid>
      <CurrentWeatherGrid>
        <WeatherTemperature
          size="s"
          title="Max Temp"
          temperature={forecastWeather.max_temperature}
        />
      </CurrentWeatherGrid>
      <CurrentWeatherGrid>
        <WeatherTemperature
          size="s"
          title="Min Temp"
          temperature={forecastWeather.min_temperature}
        />
      </CurrentWeatherGrid>
      <CurrentWeatherGrid>
        <WeatherTemperature
          size="s"
          title="Avg Temp"
          temperature={forecastWeather.average_temperature}
        />
      </CurrentWeatherGrid>
      <CurrentWeatherGrid>
        <WindSpeed
          size="s"
          title="Max Wind Speed"
          windSpeed={forecastWeather.max_wind_speed}
        />
      </CurrentWeatherGrid>
      <CurrentWeatherGrid>
        <Humidity size="s" title="Avg Humidity" humidity={8} />
      </CurrentWeatherGrid>
      <CurrentWeatherGrid>
        <Precipitations
          title="Precipitations"
          precipitations={forecastWeather.total_precipitation}
        />
      </CurrentWeatherGrid>
      <CurrentWeatherGrid>
        <WillIt
          willRain={forecastWeather.dayli_chances.will_it_rain}
          willSnow={forecastWeather.dayli_chances.will_it_snow}
        />
      </CurrentWeatherGrid>
      <CurrentWeatherGrid>
        <PorcentageChanceOf
          snow={forecastWeather.dayli_chances.porcentage_chance_of_snow}
          rain={forecastWeather.dayli_chances.porcentage_chance_of_rain}
        />
      </CurrentWeatherGrid>
    </CurrentWeatherContainer>
  )
}
