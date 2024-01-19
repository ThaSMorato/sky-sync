import { theme } from '@/styles'

interface GetVariantWithTemperaturReturn {
  symbol: string
  text: 'hot' | 'average' | 'cold'
}

export const getVariantWithTemperature = (
  temperature: number,
): GetVariantWithTemperaturReturn => {
  if (temperature <= 10)
    return {
      text: 'cold',
      symbol: `${theme.colors.blue100}`,
    }
  if (temperature <= 17)
    return {
      text: 'average',
      symbol: `${theme.colors.green300}`,
    }
  return {
    text: 'hot',
    symbol: `${theme.colors.red600}`,
  }
}
