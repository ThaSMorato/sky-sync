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

export interface ForecastWeather extends CurrentWeather {
  forecast: Array<{
    date: string
    weather_icon: string
    max_temperature: Temperature
    min_temperature: Temperature
    average_temperature: Temperature
  }>
}

export const fromCurrentForecastToWeatherForecast = (
  forecastResponse: ForecastResponse,
) => {
  const forecast: ForecastWeather = {
    location_name: `${forecastResponse.location.name}, ${forecastResponse.location.region}`,
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
      date: forecastDay.date,
      weather_icon: forecastDay.day.condition.icon,
    })),
  }

  return forecast
}
