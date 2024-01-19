import { Drop } from 'phosphor-react'

import { theme } from '@/styles'

import { Text } from '../atoms/Text'

interface HumidityProps {
  humidity: number | undefined
}

const dropColor = `${theme.colors.blue600}`

export const Humidity = ({ humidity }: HumidityProps) => {
  if (humidity === undefined) {
    return (
      <>
        <Drop size={50} color={dropColor} />
        <Text size="titleS" weight="bold" font="baloo" color="humidity">
          - -
        </Text>
      </>
    )
  }

  return (
    <>
      <Drop size={50} color={dropColor} />
      <Text size="titleS" weight="bold" font="baloo" color="humidity">
        {humidity} %
      </Text>
    </>
  )
}
