import { Text } from '../atoms/Text'

interface WillItProps {
  willRain: boolean
  willSnow: boolean
}

export const WillIt = ({ willRain, willSnow }: WillItProps) => {
  return (
    <>
      <Text color="properties" weight="bold" size="s">
        Will it...
      </Text>
      <div>
        <div>
          <Text color="properties" weight="bold" size="xs">
            Snow?
          </Text>
          <Text
            size="xs"
            weight="bold"
            font="baloo"
            color={willSnow ? 'red' : 'green'}
          >
            {willSnow ? 'Yes' : 'No'}
          </Text>
        </div>
        <div>
          <Text color="properties" weight="bold" size="xs">
            Rain?
          </Text>
          <Text
            size="xs"
            weight="bold"
            font="baloo"
            color={willRain ? 'red' : 'green'}
          >
            {willRain ? 'Yes' : 'No'}
          </Text>
        </div>
      </div>
    </>
  )
}
