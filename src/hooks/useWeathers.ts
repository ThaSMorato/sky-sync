import { useContext } from 'react'

import { WeatherForecastContext } from '@/context/weatherForecastContext'

export const useWeathers = () => {
  const context = useContext(WeatherForecastContext)

  if (!context) {
    throw new Error('You need to provide a context')
  }

  return context
}
