import { render, screen } from '@testing-library/react'
import React, { ReactNode } from 'react'
import { describe, expect, it, Mock, vitest } from 'vitest'

import { ForecastCard } from '../../../src/components/molecules/ForecastCard'
import { useSwitchUnityMeasures } from '../../../src/hooks/useSwitchUnitMeasures'

interface ForecastWeatherUnique {
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

vitest.mock('../../../src/components/molecules/ForecastCard/style', () => {
  const CurrentImageContainerMock = ({ children }: { children: ReactNode }) => (
    <div data-testid="image-id">{children}</div>
  )
  const CurrentWeatherContainerMock = ({
    children,
  }: {
    children: ReactNode
  }) => <div data-testid="container-id">{children}</div>
  const CurrentWeatherGridMock = ({ children }: { children: ReactNode }) => (
    <div data-testid="grid-id">{children}</div>
  )

  return {
    CurrentImageContainer: CurrentImageContainerMock,
    CurrentWeatherContainer: CurrentWeatherContainerMock,
    CurrentWeatherGrid: CurrentWeatherGridMock,
  }
})

vitest.mock('../../../src/styles', (deafultImport) => {
  const themeMock = {
    colors: {
      green300: 'green300',
      red600: 'red600',
      blue100: 'blue100',
    },
  }

  return {
    ...deafultImport,
    theme: themeMock,
  }
})

vitest.mock('../../../src/components/atoms/Text', () => {
  const TextMock = ({ children }: { children?: ReactNode }) => (
    <p data-testid="text-id">{children}</p>
  )

  return {
    Text: TextMock,
  }
})

vitest.mock('../../../src/hooks/useSwitchUnitMeasures', () => {
  const useSwitchUnityMeasuresMock = vitest.fn()

  return {
    useSwitchUnityMeasures: useSwitchUnityMeasuresMock,
  }
})

vitest.mock('phosphor-react', (defaultImport) => {
  const ThermometerMock = ({ color = 'blue600' }: { color?: string }) => (
    <p data-testid={color}>thermometer</p>
  )

  return {
    ...defaultImport,
    ThermometerCold: ThermometerMock,
    ThermometerHot: ThermometerMock,
    ThermometerSimple: ThermometerMock,
  }
})

vitest.mock('dayjs', () => {
  const mockDayJs = (date: string) => ({
    format: () => `date-${date}`,
  })

  return {
    default: mockDayJs,
  }
})

const mockedUseSwitchUnityMeasures = useSwitchUnityMeasures as Mock

mockedUseSwitchUnityMeasures.mockReturnValue({
  showFahrenheit: false,
})

const forecastObject = {
  weather_icon: 'icon.url',
  date: '2024-01-01',
  max_temperature: {
    celcius: 29,
    fahrenheit: 29,
  },
  min_temperature: {
    celcius: 21,
    fahrenheit: 21,
  },
  average_temperature: {
    celcius: 25,
    fahrenheit: 25,
  },
}

const sut = (forecast: ForecastWeatherUnique) => {
  const element = render(<ForecastCard forecastWeather={forecast} />)

  return {
    element,
  }
}

describe('ForecastCard Component', () => {
  describe('value', () => {
    it('should render the with the value if passed', () => {
      sut(forecastObject)

      const [date, avgValue, coldValue, hotValue] =
        screen.getAllByTestId('text-id')
      const avg = screen.getByTestId('green300')
      const hot = screen.getByTestId('red600')
      const cold = screen.getByTestId('blue100')
      const imageComponent = screen.getByTestId('image-id')
      const containerComponent = screen.getByTestId('container-id')
      const gridComponent = screen.getByTestId('grid-id')

      expect(date).toBeInTheDocument()
      expect(date.textContent).toEqual(expect.stringContaining('date-'))
      expect(avgValue).toBeInTheDocument()
      expect(avgValue.textContent).toEqual(expect.stringContaining('25'))
      expect(coldValue).toBeInTheDocument()
      expect(coldValue.textContent).toEqual(expect.stringContaining('21'))
      expect(hotValue).toBeInTheDocument()
      expect(hotValue.textContent).toEqual(expect.stringContaining('29'))
      expect(avg).toBeInTheDocument()
      expect(hot).toBeInTheDocument()
      expect(cold).toBeInTheDocument()
      expect(imageComponent).toBeInTheDocument()
      expect(containerComponent).toBeInTheDocument()
      expect(gridComponent).toBeInTheDocument()
    })
  })
  describe('show Fahrenheit', () => {
    it('should render the with the value of celcius if showFahrenheit is false', () => {
      sut(forecastObject)

      const [_date, avgValue, coldValue, hotValue] =
        screen.getAllByTestId('text-id')

      expect(avgValue.textContent).toBe('25C°')
      expect(coldValue.textContent).toBe('21C°')
      expect(hotValue.textContent).toBe('29C°')
    })
    it('should render the with the value of fahrenheit if showFahrenheit is true', () => {
      mockedUseSwitchUnityMeasures.mockReturnValue({
        showFahrenheit: true,
      })

      sut(forecastObject)

      const [_date, avgValue, coldValue, hotValue] =
        screen.getAllByTestId('text-id')

      expect(avgValue.textContent).toBe('25F°')
      expect(coldValue.textContent).toBe('21F°')
      expect(hotValue.textContent).toBe('29F°')
    })
  })
})
