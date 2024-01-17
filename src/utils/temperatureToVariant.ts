export const getVariantWithTemperature = (
  temperature: number,
): 'yellow' | 'blue' | 'lightBlue' | 'red' => {
  if (temperature <= 10) return 'lightBlue'
  if (temperature <= 17) return 'blue'
  if (temperature <= 28) return 'yellow'
  return 'red'
}
