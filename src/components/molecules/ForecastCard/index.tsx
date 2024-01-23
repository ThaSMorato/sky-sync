import dayjs from 'dayjs'
import {
  ThermometerCold,
  ThermometerHot,
  ThermometerSimple,
} from 'phosphor-react'

import { Text } from '@/components/atoms/Text'
import { useSwitchUnityMeasures } from '@/hooks/useSwitchUnitMeasures'
import { theme } from '@/styles'

import {
  CurrentImageContainer,
  CurrentWeatherContainer,
  CurrentWeatherGrid,
} from './style'

export interface ForecastWeatherUnique {
  weather_icon: string
  date: string
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
}

interface ForecastCardProps {
  forecastWeather: ForecastWeatherUnique
}

const averageColor = theme.colors.green300
const hotColor = theme.colors.red600
const coldColor = theme.colors.blue100

export const ForecastCard = ({ forecastWeather }: ForecastCardProps) => {
  const { showFahrenheit } = useSwitchUnityMeasures()

  return (
    <CurrentWeatherContainer shaddow="withShaddow">
      <CurrentImageContainer>
        <img src={forecastWeather.weather_icon} alt="" />
      </CurrentImageContainer>
      <Text
        font="mono"
        weight="bold"
        size="l"
        spacing="date"
        color="description"
      >
        {dayjs(forecastWeather.date).format('MM/DD/YYYY')}
      </Text>
      <CurrentWeatherGrid>
        <div>
          <ThermometerSimple size={40} color={`${averageColor}`} />
          <Text
            size="titleL"
            color="average"
            font="baloo"
            weight="bold"
            data-cy="average"
          >
            {showFahrenheit
              ? `${forecastWeather.average_temperature.fahrenheit}F°`
              : `${forecastWeather.average_temperature.celcius}C°`}
          </Text>
        </div>
        <div>
          <ThermometerCold weight="bold" size={16} color={`${coldColor}`} />
          <Text size="xs" color="cold" font="baloo" weight="bold" data-cy="min">
            {showFahrenheit
              ? `${forecastWeather.min_temperature.fahrenheit}F°`
              : `${forecastWeather.min_temperature.celcius}C°`}
          </Text>
          <ThermometerHot weight="bold" size={16} color={`${hotColor}`} />
          <Text size="xs" color="hot" font="baloo" weight="bold" data-cy="max">
            {showFahrenheit
              ? `${forecastWeather.max_temperature.fahrenheit}F°`
              : `${forecastWeather.max_temperature.celcius}C°`}
          </Text>
        </div>
      </CurrentWeatherGrid>
    </CurrentWeatherContainer>
  )
}
