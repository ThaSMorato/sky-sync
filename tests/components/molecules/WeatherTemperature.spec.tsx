import { render, screen } from '@testing-library/react'
import React, { ReactNode } from 'react'
import { describe, expect, it, Mock, vitest } from 'vitest'

import { WeatherTemperature } from '../../../src/components/molecules/WeatherTemperature'
import { useSwitchUnityMeasures } from '../../../src/hooks/useSwitchUnitMeasures'

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

vitest.mock('../../../src/utils/temperatureToVariant', () => {
  const getVariantWithTemperatureMock = vitest.fn().mockReturnValue({
    text: 'text-temp',
    symbol: 'symbol-temp',
  })

  return {
    getVariantWithTemperature: getVariantWithTemperatureMock,
  }
})

vitest.mock('phosphor-react', (defaultImport) => {
  const ThermometerSimpleMock = ({ color = 'blue600' }: { color?: string }) => (
    <p data-testid={color}>thermometerSimple</p>
  )

  return {
    ...defaultImport,
    ThermometerSimple: ThermometerSimpleMock,
  }
})

const mockedUseSwitchUnityMeasures = useSwitchUnityMeasures as Mock

mockedUseSwitchUnityMeasures.mockReturnValue({
  showFahrenheit: false,
})

interface Temp {
  celcius: number
  fahrenheit: number
}

const sut = (temp: Temp | undefined) => {
  const element = render(<WeatherTemperature temperature={temp} />)

  return {
    element,
  }
}

describe('WeatherTemperature Component', () => {
  describe('value', () => {
    it('should render the with the value if passed', () => {
      sut({
        celcius: 25,
        fahrenheit: 25,
      })

      const text = screen.getByTestId('text-id')
      const thermometerSimple = screen.getByTestId('symbol-temp')

      expect(text).toBeInTheDocument()
      expect(text.textContent).toEqual(expect.stringContaining('25'))
      expect(thermometerSimple).toBeInTheDocument()
    })
    it('should render with "- -" if no value is passed', () => {
      sut(undefined)

      const text = screen.getByTestId('text-id')
      const thermometerSimple = screen.getByTestId('blue600')

      expect(text).toBeInTheDocument()
      expect(text.textContent).toBe('- -')
      expect(thermometerSimple).toBeInTheDocument()
    })
  })
  describe('show fahrenheit', () => {
    it('should render the with the value of celcius if showshowFahrenheit is false', () => {
      sut({
        celcius: 25,
        fahrenheit: 0,
      })

      const text = screen.getByTestId('text-id')

      expect(text.textContent).toBe('25C°')
    })
    it('should render the with the value of fahrenheit if showshowFahrenheit is true', () => {
      mockedUseSwitchUnityMeasures.mockReturnValue({
        showFahrenheit: true,
      })

      sut({
        celcius: 25,
        fahrenheit: 80,
      })

      const text = screen.getByTestId('text-id')

      expect(text.textContent).toBe('80F°')
    })
  })
})
