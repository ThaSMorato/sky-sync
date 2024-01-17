import {
  CurrentWeatherResponse,
  ForecastResponse,
} from '@/services/weatherService'

interface Temperature {
  celcius: number
  fahrenheit: number
}

interface WindSpeed {
  miles: number
  kilometers: number
}

interface CurrentWeather {
  location_name: string
  temperature: Temperature
  weather_icon: string
  weather_description: string
  wind_speed: WindSpeed
  humidity: number
}

interface Precipitation {
  milimeters: number
  inches: number
}

interface DayliChances {
  will_it_rain: number
  will_it_snow: number
  porcentage_chance_of_rain: number
  porcentage_chance_of_snow: number
}

interface ForecastWeather extends CurrentWeather {
  forecast: Array<{
    max_temperature: Temperature
    min_temperature: Temperature
    average_temperature: Temperature
    max_wind_speed: WindSpeed
    average_humidity: number
    weather_icon: string
    weather_description: string
    total_precipitation: Precipitation
    dayli_chances: DayliChances
  }>
}

export const fromCurrentResponseToWeather = (
  weatherResponse: CurrentWeatherResponse,
) => {
  const weather: CurrentWeather = {
    location_name: weatherResponse.location.name,
    temperature: {
      celcius: weatherResponse.current.temp_c,
      fahrenheit: weatherResponse.current.temp_f,
    },
    weather_icon: weatherResponse.current.condition.icon,
    weather_description: weatherResponse.current.condition.text,
    wind_speed: {
      kilometers: weatherResponse.current.wind_kph,
      miles: weatherResponse.current.wind_mph,
    },
    humidity: weatherResponse.current.humidity,
  }

  return weather
}

export const fromCurrentForecastToWeatherForecast = (
  forecastResponse: ForecastResponse,
) => {
  const forecast: ForecastWeather = {
    location_name: forecastResponse.location.name,
    temperature: {
      celcius: forecastResponse.current.temp_c,
      fahrenheit: forecastResponse.current.temp_f,
    },
    weather_icon: forecastResponse.current.condition.icon,
    weather_description: forecastResponse.current.condition.text,
    wind_speed: {
      kilometers: forecastResponse.current.wind_kph,
      miles: forecastResponse.current.wind_mph,
    },
    humidity: forecastResponse.current.humidity,
    forecast: forecastResponse.forecast.forecastday.map((forecastDay) => ({
      max_temperature: {
        celcius: forecastDay.maxtemp_c,
        fahrenheit: forecastDay.maxtemp_f,
      },
      min_temperature: {
        celcius: forecastDay.mintemp_c,
        fahrenheit: forecastDay.mintemp_f,
      },
      average_temperature: {
        celcius: forecastDay.avgtemp_c,
        fahrenheit: forecastDay.avgtemp_f,
      },
      max_wind_speed: {
        kilometers: forecastDay.maxwind_kph,
        miles: forecastDay.maxwind_mph,
      },
      average_humidity: forecastDay.avghumidity,
      weather_icon: forecastDay.condition.icon,
      weather_description: forecastDay.condition.text,
      total_precipitation: {
        inches: forecastDay.totalprecip_in,
        milimeters: forecastDay.totalprecip_mm,
      },
      dayli_chances: {
        porcentage_chance_of_rain: forecastDay.daily_chance_of_rain,
        porcentage_chance_of_snow: forecastDay.daily_chance_of_snow,
        will_it_rain: forecastDay.daily_will_it_rain,
        will_it_snow: forecastDay.daily_will_it_snow,
      },
    })),
  }

  return forecast
}
