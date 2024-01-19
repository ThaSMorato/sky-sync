import { Drop } from 'phosphor-react'

import { theme } from '@/styles'

import { Text } from '../atoms/Text'

interface HumidityProps {
  humidity: number
}

const dropColor = `${theme.colors.blue600}`

export const Humidity = ({ humidity }: HumidityProps) => {
  return (
    <>
      <Drop size={50} color={dropColor} />
      <Text size="titleS" weight="bold" font="baloo" color="humidity">
        {humidity} %
      </Text>
    </>
  )
}
