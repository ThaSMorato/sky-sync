import { AxiosError } from 'axios'
import { createContext, ReactNode, useState } from 'react'

import { CurrentWeather } from '@/dto/weatherDto'
import { useWeatherService } from '@/hooks/useWeatherService'

export interface ForecastWeather {
  weather_icon: string
  date: string
  max_temperature: {
    celcius: number
    fahrenheit: number
  }
  min_temperature: {
    celcius: number
    fahrenheit: number
  }
  average_temperature: {
    celcius: number
    fahrenheit: number
  }
}

export interface WeatherForecastContextValue {
  currentWeather: CurrentWeather | null
  forecastWeather: ForecastWeather[] | null
  isLoading: boolean
  error: null | string
  fetchWeathersByCity: (city: string) => Promise<void>
}

export const WeatherForecastContext =
  createContext<WeatherForecastContextValue | null>(null)

interface WeatherForecastProviderProps {
  children: ReactNode
}

interface ApiError {
  error: {
    message: string
  }
}

export const WeatherForecastProvider = ({
  children,
}: WeatherForecastProviderProps) => {
  const { fetchForecastWithCity } = useWeatherService()

  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(
    null,
  )
  const [forecastWeather, setForecastWeather] = useState<
    ForecastWeather[] | null
  >(null)

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)

  const fetchWeathersByCity = async (city: string) => {
    setIsLoading(true)
    setError(null)
    try {
      const { current, forecast } = await fetchForecastWithCity({ city })
      setCurrentWeather(current)
      setForecastWeather(forecast)
    } catch (error) {
      if (error instanceof AxiosError) {
        const err = error as AxiosError<ApiError>
        if (err.response) {
          setError(err.response.data.error.message)
        } else {
          setError('Something unexpected happened, try again latter')
        }
      }
      setError('Something unexpected happened, try again latter')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <WeatherForecastContext.Provider
      value={{
        currentWeather,
        forecastWeather,
        isLoading,
        error,
        fetchWeathersByCity,
      }}
    >
      {children}
    </WeatherForecastContext.Provider>
  )
}
