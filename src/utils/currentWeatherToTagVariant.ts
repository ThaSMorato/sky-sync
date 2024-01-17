type TagsValue =
  | 'blueAndYellow'
  | 'default'
  | 'blue'
  | 'yellow'
  | 'gray'
  | 'darkBlue'

const WEATHER_NAME: ReadonlyMap<string, TagsValue> = new Map([
  ['Clear', 'blue'],
  ['Sunny', 'yellow'],
  ['Partly Cloudy', 'gray'],
  ['Cloudy', 'yellow'],
  ['Overcast', 'gray'],
  ['Mist', 'gray'],
  ['Patchy rain nearby', 'darkBlue'],
  ['Patchy snow nearby', 'gray'],
  ['Patchy sleet nearby', 'darkBlue'],
  ['Patchy freezing drizzle nearby', 'gray'],
  ['Thundery outbreaks in nearby', 'blueAndYellow'],
  ['Blowing snow', 'gray'],
  ['Blizzard', 'gray'],
  ['Fog', 'gray'],
  ['Freezing fog', 'gray'],
  ['Patchy light drizzle', 'darkBlue'],
  ['Light drizzle', 'darkBlue'],
  ['Freezing drizzle', 'darkBlue'],
  ['Heavy freezing drizzle', 'darkBlue'],
  ['Patchy light rain', 'darkBlue'],
  ['Light rain', 'darkBlue'],
  ['Moderate rain at times', 'darkBlue'],
  ['Moderate rain', 'darkBlue'],
  ['Heavy rain at times', 'darkBlue'],
  ['Heavy rain', 'darkBlue'],
  ['Light freezing rain', 'darkBlue'],
  ['Moderate or heavy freezing rain', 'darkBlue'],
  ['Light sleet', 'darkBlue'],
  ['Moderate or heavy sleet', 'darkBlue'],
  ['Patchy light snow', 'gray'],
  ['Light snow', 'gray'],
  ['Patchy moderate snow', 'gray'],
  ['Moderate snow', 'gray'],
  ['Patchy heavy snow', 'gray'],
  ['Heavy snow', 'gray'],
  ['Ice pellets', 'gray'],
  ['Light rain shower', 'darkBlue'],
  ['Moderate or heavy rain shower', 'darkBlue'],
  ['Torrential rain shower', 'darkBlue'],
  ['Light sleet showers', 'darkBlue'],
  ['Moderate or heavy sleet showers', 'darkBlue'],
  ['Light snow showers', 'gray'],
  ['Moderate or heavy snow showers', 'gray'],
  ['Light showers of ice pellets', 'gray'],
  ['Moderate or heavy showers of ice pellets', 'gray'],
  ['Patchy light rain in area with thunder', 'blueAndYellow'],
  ['Moderate or heavy rain in area with thunder', 'blueAndYellow'],
  ['Patchy light snow in area with thunder', 'blueAndYellow'],
  ['Moderate or heavy snow in area with thunder', 'blueAndYellow'],
])

export const getTagVariantFromWeatherDescription = (
  weatherDescription: string,
): TagsValue => {
  const tagVariant = WEATHER_NAME.get(weatherDescription)

  if (tagVariant) {
    return tagVariant
  }
  return 'default'
}
