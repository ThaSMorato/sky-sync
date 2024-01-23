import { useContext } from 'react'

import {
  WeatherForecastContext,
  WeatherForecastContextValue,
} from '@/context/weatherForecastContext'

export const useWeathers = (): WeatherForecastContextValue => {
  const context = useContext(WeatherForecastContext)

  if (!context) {
    throw new Error('You need to provide a context')
  }

  return context
}
