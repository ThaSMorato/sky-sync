const WEATHER_DICT = {
  'Patchy rain nearby': 'Rain nearby',
  'Patchy snow nearby': 'Snow nearby',
  'Patchy sleet nearby': 'Sleet nearby',
  'Patchy freezing drizzle nearby': 'Freezing drizzle',
  'Patchy light rain in area with thunder': 'Light rain',
  'Patchy light snow in area with thunder': 'Light snow',
  'Patchy light drizzle': 'Light drizzle',
  'Thundery outbreaks in nearby': 'Thundery outbreaks',
  'Heavy freezing drizzle': 'Freezing drizzle',
  'Patchy light rain': 'Light rain',
  'Moderate rain at times': 'Moderate rain',
  'Heavy rain at times': 'Heavy rain',
  'Light freezing rain': 'Freezing rain',
  'Moderate or heavy freezing rain': 'Freezing rain',
  'Moderate or heavy sleet': 'Sleet',
  'Patchy light snow': 'Light snow',
  'Patchy moderate snow': 'Moderate snow',
  'Patchy heavy snow': 'Heavy snow',
  'Light rain shower': 'Rain shower',
  'Moderate or heavy rain shower': 'Rain shower',
  'Torrential rain shower': 'Rain shower',
  'Light sleet showers': 'Sleet showers',
  'Moderate or heavy sleet showers': 'Sleet showers',
  'Light snow showers': 'Snow showers',
  'Moderate or heavy snow showers': 'Snow showers',
  'Light showers of ice pellets': 'Ice pellets',
  'Moderate or heavy showers of ice pellets': 'Ice pellets',
  'Moderate or heavy rain in area with thunder': 'Thundery rain',
  'Moderate or heavy snow in area with thunder': 'Thundery snow',
  'Moderate or heavy rain with thunder': 'Thundery rain',
  'Moderate or heavy snow with thunder': 'Thundery snow',
}

export const translateLongDescriptions = (desc: string) => {
  const description = Object.keys(WEATHER_DICT).includes(desc)
    ? WEATHER_DICT[desc as keyof typeof WEATHER_DICT]
    : desc

  console.log(description)

  return description
}
