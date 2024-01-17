import { Text } from '../atoms/Text'

interface PorcentageChanceOfProps {
  rain: number
  snow: number
}

export const PorcentageChanceOf = ({ rain, snow }: PorcentageChanceOfProps) => {
  return (
    <>
      <Text color="properties" weight="bold" size="s">
        Porcentage chance of
      </Text>
      <div>
        <div>
          <Text color="properties" weight="bold" size="xs">
            Snow
          </Text>
          <Text size="xs" weight="bold" font="baloo" color="green">
            {snow} %
          </Text>
        </div>
        <div>
          <Text color="properties" weight="bold" size="xs">
            Rain
          </Text>
          <Text size="xs" weight="bold" font="baloo" color="green">
            {rain} %
          </Text>
        </div>
      </div>
    </>
  )
}
