import { getVariantWithTemperature } from '@/utils/temperatureToVariant'

import { Text } from '../atoms/Text'

interface WeatherTemperatureProps {
  temperature: {
    celcius: number
    fahrenheit: number
  }
  title: string
  size?: 'l' | 's'
}

interface GetSizesResult {
  title: 'titleS' | 's'
  text: 'l' | 'xs'
}

const getSizes = (size: 'l' | 's'): GetSizesResult => {
  if (size === 'l') {
    return {
      title: 'titleS',
      text: 'l',
    }
  }
  return {
    title: 's',
    text: 'xs',
  }
}

export const WeatherTemperature = ({
  temperature,
  title,
  size = 'l',
}: WeatherTemperatureProps) => {
  const temperatureVariant = getVariantWithTemperature(temperature.celcius)
  const sizes = getSizes(size)

  return (
    <>
      <Text color="properties" weight="bold" size={sizes.title}>
        {title}
      </Text>
      <div>
        <Text
          size={sizes.text}
          weight="bold"
          font="baloo"
          color={temperatureVariant}
        >
          {temperature.celcius} C
        </Text>
        <Text
          size={sizes.text}
          weight="bold"
          font="baloo"
          color={temperatureVariant}
        >
          {temperature.fahrenheit} F
        </Text>
      </div>
    </>
  )
}
