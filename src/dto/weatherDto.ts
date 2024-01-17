import { ForecastResponse } from '@/services/weatherService'

interface Temperature {
  celcius: number
  fahrenheit: number
}

interface WindSpeed {
  miles: number
  kilometers: number
}

export interface CurrentWeather {
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
  will_it_rain: boolean
  will_it_snow: boolean
  porcentage_chance_of_rain: number
  porcentage_chance_of_snow: number
}

export interface ForecastWeather extends CurrentWeather {
  forecast: Array<{
    weather_icon: string
    weather_description: string
    max_temperature: Temperature
    min_temperature: Temperature
    average_temperature: Temperature
    max_wind_speed: WindSpeed
    average_humidity: number
    total_precipitation: Precipitation
    dayli_chances: DayliChances
  }>
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
        celcius: forecastDay.day.maxtemp_c,
        fahrenheit: forecastDay.day.maxtemp_f,
      },
      min_temperature: {
        celcius: forecastDay.day.mintemp_c,
        fahrenheit: forecastDay.day.mintemp_f,
      },
      average_temperature: {
        celcius: forecastDay.day.avgtemp_c,
        fahrenheit: forecastDay.day.avgtemp_f,
      },
      max_wind_speed: {
        kilometers: forecastDay.day.maxwind_kph,
        miles: forecastDay.day.maxwind_mph,
      },
      average_humidity: forecastDay.day.avghumidity,
      weather_icon: forecastDay.day.condition.icon,
      weather_description: forecastDay.day.condition.text,
      total_precipitation: {
        inches: forecastDay.day.totalprecip_in,
        milimeters: forecastDay.day.totalprecip_mm,
      },
      dayli_chances: {
        porcentage_chance_of_rain: forecastDay.hour[0].chance_of_rain,
        porcentage_chance_of_snow: forecastDay.hour[0].chance_of_snow,
        will_it_rain: forecastDay.hour[0].daily_will_it_rain > 0,
        will_it_snow: forecastDay.hour[0].daily_will_it_snow > 0,
      },
    })),
  }

  return forecast
}
