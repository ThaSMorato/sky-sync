import { ThermometerSimple } from 'phosphor-react'

import { useSwitchUnityMeasures } from '@/hooks/useSwitchUnitMeasures'
import { getVariantWithTemperature } from '@/utils/temperatureToVariant'

import { Text } from '../atoms/Text'

interface WeatherTemperatureProps {
  temperature: {
    celcius: number
    fahrenheit: number
  }
}

export const WeatherTemperature = ({
  temperature,
}: WeatherTemperatureProps) => {
  const { text, symbol } = getVariantWithTemperature(temperature.celcius)
  const { showFahrenheit } = useSwitchUnityMeasures()

  const tempText = showFahrenheit
    ? `${temperature.fahrenheit}F°`
    : `${temperature.celcius}C°`

  return (
    <>
      <ThermometerSimple size={50} color={symbol} />
      <Text size="titleS" weight="bold" font="baloo" color={text}>
        {tempText}
      </Text>
    </>
  )
}
