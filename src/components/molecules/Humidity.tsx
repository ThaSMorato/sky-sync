import { Text } from '../atoms/Text'

interface HumidityProps {
  humidity: number
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

export const Humidity = ({ humidity, title, size = 'l' }: HumidityProps) => {
  const sizes = getSizes(size)

  return (
    <>
      <Text color="properties" weight="bold" size={sizes.title}>
        {title}
      </Text>

      <Text size={sizes.text} weight="bold" font="baloo" color="green">
        {humidity} %
      </Text>
    </>
  )
}
