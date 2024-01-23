import { ThermometerSimple } from 'phosphor-react'

import { useSwitchUnityMeasures } from '@/hooks/useSwitchUnitMeasures'
import { getVariantWithTemperature } from '@/utils/temperatureToVariant'

import { Text } from '../atoms/Text'

interface WeatherTemperatureProps {
  temperature:
    | {
        celcius: number
        fahrenheit: number
      }
    | undefined
}

export const WeatherTemperature = ({
  temperature,
}: WeatherTemperatureProps) => {
  const { showFahrenheit } = useSwitchUnityMeasures()

  if (temperature === undefined) {
    return (
      <>
        <ThermometerSimple size={50} />
        <Text
          size="titleS"
          weight="bold"
          font="baloo"
          color="hot"
          data-cy="temp"
        >
          - -
        </Text>
      </>
    )
  }

  const { text, symbol } = getVariantWithTemperature(temperature.celcius)

  const tempText = showFahrenheit
    ? `${temperature.fahrenheit}F°`
    : `${temperature.celcius}C°`

  return (
    <>
      <ThermometerSimple size={50} color={symbol} />
      <Text
        size="titleS"
        weight="bold"
        font="baloo"
        color={text}
        data-cy="temp"
      >
        {tempText}
      </Text>
    </>
  )
}
