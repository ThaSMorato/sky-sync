import { render, screen } from '@testing-library/react'
import React, { ReactNode } from 'react'
import { describe, expect, it, Mock, vitest } from 'vitest'

import { ForecastCards } from '../../../src/components/organism/ForecastCards'
import { useWeathers } from '../../../src/hooks/useWeathers'

vitest.mock('../../../src/components/atoms/Text', () => {
  const TextMock = ({ children }: { children?: ReactNode }) => (
    <p data-testid="text-id">{children}</p>
  )

  return {
    Text: TextMock,
  }
})
vitest.mock('../../../src/components/molecules/ForecastCard', () => {
  const ForecastCardMock = ({
    forecastWeather,
  }: {
    forecastWeather: { date: string }
  }) => <p data-testid="forecast-id">{forecastWeather.date}</p>
  return {
    ForecastCard: ForecastCardMock,
  }
})

vitest.mock('../../../src/components/molecules/CurrentWeatherCard', () => {
  const CurrentWeatherCardMock = ({
    currentWeather,
  }: {
    currentWeather?: { weather_description: string }
  }) => <p data-testid="current-id">{currentWeather?.weather_description}</p>
  return {
    CurrentWeatherCard: CurrentWeatherCardMock,
  }
})

vitest.mock('../../../src/components/organism/ForecastCards/styles', () => {
  const divMock =
    (id: string) =>
    // eslint-disable-next-line react/display-name
    ({ children }: { children?: ReactNode }) => (
      <div data-testid={id}>{children}</div>
    )

  return {
    ForecastCardsBody: divMock('forecastCardsBody-id'),
    ForecastCardsContainer: divMock('forecastCardsContainer-id'),
    ForecastCardsForecast: divMock('forecastCardsForecast-id'),
    ForecastCardsHeader: divMock('forecastCardsHeader-id'),
  }
})

vitest.mock('../../../src/hooks/useWeathers', () => {
  const useWeathersMock = vitest.fn()

  return {
    useWeathers: useWeathersMock,
  }
})

const mockedUseWeathers = useWeathers as Mock

const currentWeatherObject = {
  weather_description: 'Weather',
  location_name: 'Location',
}

const forecastWeatherObject = {
  date: '2024-01-01',
}

mockedUseWeathers.mockReturnValue({
  currentWeather: currentWeatherObject,
  forecastWeather: [forecastWeatherObject],
})

const sut = () => {
  const element = render(<ForecastCards />)

  return {
    element,
  }
}

describe('ForecastCards Component', () => {
  describe('render', () => {
    it('should render the ForecastCards', () => {
      sut()

      const forecastCardsBody = screen.getByTestId('forecastCardsBody-id')
      const forecastCardsContainer = screen.getByTestId(
        'forecastCardsContainer-id',
      )
      const forecastCardsForecast = screen.getByTestId(
        'forecastCardsForecast-id',
      )
      const forecastCardsHeader = screen.getByTestId('forecastCardsHeader-id')
      const currentWeather = screen.getByTestId('current-id')
      const forecastWeather = screen.getByTestId('forecast-id')
      const text = screen.getByTestId('text-id')

      expect(text).toBeInTheDocument()
      expect(forecastWeather).toBeInTheDocument()
      expect(currentWeather).toBeInTheDocument()
      expect(forecastCardsBody).toBeInTheDocument()
      expect(forecastCardsContainer).toBeInTheDocument()
      expect(forecastCardsForecast).toBeInTheDocument()
      expect(forecastCardsHeader).toBeInTheDocument()
    })
  })
  describe('values', () => {
    it('should show the value if passed', () => {
      sut()

      const currentWeather = screen.getByTestId('current-id')
      const forecastWeather = screen.getByTestId('forecast-id')
      const text = screen.getByTestId('text-id')

      expect(text.textContent).toBe('Location')
      expect(forecastWeather.textContent).toBe('2024-01-01')
      expect(currentWeather.textContent).toBe('Weather')
    })

    it('should show the value if passed', () => {
      mockedUseWeathers.mockReturnValue({
        currentWeather: null,
        forecastWeather: null,
      })

      sut()

      const currentWeather = screen.getByTestId('current-id')
      const forecastWeather = screen.queryByTestId('forecast-id')
      const text = screen.getByTestId('text-id')

      expect(text.textContent).toBe('- - , - -')
      expect(forecastWeather).not.toBeInTheDocument()
      expect(currentWeather.textContent).toBe('')
    })
  })
})
