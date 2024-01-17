import { Text } from '../atoms/Text'

interface PrecipitationsProps {
  precipitations: {
    milimeters: number
    inches: number
  }
  title: string
}

export const Precipitations = ({
  precipitations,
  title,
}: PrecipitationsProps) => {
  return (
    <>
      <Text color="properties" weight="bold" size="s">
        {title}
      </Text>
      <div>
        <Text size="xs" weight="bold" font="baloo" color="green">
          {precipitations.inches} IN
        </Text>
        <Text size="xs" weight="bold" font="baloo" color="green">
          {precipitations.milimeters} MM
        </Text>
      </div>
    </>
  )
}
