import { Text } from '../atoms/Text'

interface WindSpeedProps {
  windSpeed: {
    miles: number
    kilometers: number
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

export const WindSpeed = ({ windSpeed, title, size = 'l' }: WindSpeedProps) => {
  const sizes = getSizes(size)

  return (
    <>
      <Text color="properties" weight="bold" size={sizes.title}>
        {title}
      </Text>
      <div>
        <Text size={sizes.text} weight="bold" font="baloo" color="green">
          {windSpeed.kilometers} KPH
        </Text>
        <Text size={sizes.text} weight="bold" font="baloo" color="green">
          {windSpeed.miles} MPH
        </Text>
      </div>
    </>
  )
}
