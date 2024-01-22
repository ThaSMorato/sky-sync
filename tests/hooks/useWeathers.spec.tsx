import { render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'
import { beforeEach, describe, expect, it, Mock, vitest } from 'vitest'

import { WeatherForecastProvider } from '../../src/context/weatherForecastContext'
import { useWeathers } from '../../src/hooks/useWeathers'
import { getWeekForecastFromCity } from '../../src/services/weatherService'

vitest.mock('../../src/services/weatherService', () => {
  return {
    getWeekForecastFromCity: vitest.fn(),
  }
})

const mockedGetWeekForecastFromCity = getWeekForecastFromCity as Mock

mockedGetWeekForecastFromCity.mockResolvedValueOnce({
  data: {
    location: {
      name: 'test',
      region: 'us-east-1',
    },
    current: {
      temp_c: 25,
      temp_f: 70,
      condition: {
        icon: 'icon.url',
        text: 'Weather',
      },
    },
    wind_kph: 7,
    wind_mph: 5,
    humidity: 65,
    forecast: {
      forecastday: [
        {
          date: '2024-01-01',
          day: {
            maxtemp_c: 35,
            maxtemp_f: 89,
            mintemp_c: 20,
            mintemp_f: 64,
            avgtemp_c: 26,
            avgtemp_f: 58,
            condition: {
              icon: 'icon.url',
            },
          },
        },
      ],
    },
  },
})

const TestingComponent = () => {
  const {
    currentWeather,
    forecastWeather,
    isLoading,
    error,
    fetchWeathersByCity,
  } = useWeathers()

  console.log(error)

  return (
    <>
      <p data-testid="check-current">{currentWeather ? 'current' : 'null'}</p>
      <p data-testid="check-forecast">
        {forecastWeather ? 'forecast' : 'null'}
      </p>
      <p data-testid="check-loading">{isLoading ? 'loading' : 'not-loading'}</p>
      <p data-testid="check-error">{error ?? 'no error'}</p>
      <button
        onClick={() => fetchWeathersByCity('test')}
        data-testid="fetch-weathers"
      >
        fetch
      </button>
    </>
  )
}

const sut = () => {
  const element = render(
    <WeatherForecastProvider>
      <TestingComponent />
    </WeatherForecastProvider>,
  )

  return { element }
}

describe('Weather contexts and hook', () => {
  beforeEach(() => {
    vitest.clearAllMocks()
  })
  it('should start with default values', () => {
    sut()

    const current = screen.getByTestId('check-current')
    const forecast = screen.getByTestId('check-forecast')
    const loading = screen.getByTestId('check-loading')
    const error = screen.getByTestId('check-error')

    expect(current.textContent).toBe('null')
    expect(forecast.textContent).toBe('null')
    expect(loading.textContent).toBe('not-loading')
    expect(error.textContent).toBe('no error')
  })
  it('should switch to new value on success', () => {
    sut()

    const current = screen.getByTestId('check-current')
    const forecast = screen.getByTestId('check-forecast')
    const loading = screen.getByTestId('check-loading')
    const error = screen.getByTestId('check-error')

    expect(current.textContent).toBe('null')
    expect(forecast.textContent).toBe('null')
    expect(loading.textContent).toBe('not-loading')
    expect(error.textContent).toBe('no error')

    const fetchButton = screen.getByTestId('fetch-weathers')

    act(() => {
      fetchButton.click()
    })

    waitFor(() => {
      expect(current.textContent).toBe('current')
      expect(forecast.textContent).toBe('forecast')
      expect(loading.textContent).toBe('loading')
      expect(error.textContent).toBe('no error')
    })
  })
  it('should switch to error value on error', () => {
    mockedGetWeekForecastFromCity.mockRejectedValue('error')
    sut()

    const current = screen.getByTestId('check-current')
    const forecast = screen.getByTestId('check-forecast')
    const loading = screen.getByTestId('check-loading')
    const error = screen.getByTestId('check-error')

    expect(current.textContent).toBe('null')
    expect(forecast.textContent).toBe('null')
    expect(loading.textContent).toBe('not-loading')
    expect(error.textContent).toBe('no error')

    const fetchButton = screen.getByTestId('fetch-weathers')

    act(() => {
      fetchButton.click()
    })

    waitFor(() => {
      expect(current.textContent).toBe('null')
      expect(forecast.textContent).toBe('null')
      expect(loading.textContent).toBe('loading')
      expect(error.textContent).toBe(
        'Something unexpected happened, try again latter',
      )
    })
  })
})
