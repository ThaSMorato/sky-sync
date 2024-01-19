import { Wind } from 'phosphor-react'

import { useSwitchUnityMeasures } from '@/hooks/useSwitchUnitMeasures'
import { theme } from '@/styles'

import { Text } from '../atoms/Text'

interface WindSpeedProps {
  windSpeed:
    | {
        miles: number
        kilometers: number
      }
    | undefined
}

const windColor = `${theme.colors.blue200}`

export const WindSpeed = ({ windSpeed }: WindSpeedProps) => {
  const { showMilesPerHour } = useSwitchUnityMeasures()

  if (windSpeed === undefined) {
    return (
      <>
        <Wind size={50} color={windColor} />
        <Text size="titleS" weight="bold" font="baloo" color="wind">
          - -
        </Text>
      </>
    )
  }

  const windText = showMilesPerHour
    ? `${windSpeed.miles}M/h`
    : `${windSpeed.kilometers}K/h`

  return (
    <>
      <Wind size={50} color={windColor} />
      <Text size="titleS" weight="bold" font="baloo" color="wind">
        {windText}
      </Text>
    </>
  )
}
