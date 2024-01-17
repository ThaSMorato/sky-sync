import { getTagVariantFromWeatherDescription } from '@/utils/currentWeatherToTagVariant'

import { CurrentWeatherTag } from './styles'

interface WeatherTagProps {
  weather: string
}

export const WeatherTag = ({ weather }: WeatherTagProps) => {
  const tagVariant = getTagVariantFromWeatherDescription(weather)
  return <CurrentWeatherTag variant={tagVariant}> {weather} </CurrentWeatherTag>
}
