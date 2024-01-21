import { render, screen } from '@testing-library/react'
import React, { ReactNode } from 'react'
import { describe, expect, it, Mock, vitest } from 'vitest'

import { WindSpeed } from '../../../src/components/molecules/WindSpeed'
import { useSwitchUnityMeasures } from '../../../src/hooks/useSwitchUnitMeasures'

vitest.mock('../../../src/styles', (deafultImport) => {
  const themeMock = {
    colors: { blue200: 'blue200' },
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
  const WindMock = ({ color = 'blue600' }: { color?: string }) => (
    <p data-testid={color}>wind</p>
  )

  return {
    ...defaultImport,
    Wind: WindMock,
  }
})

const mockedUseSwitchUnityMeasures = useSwitchUnityMeasures as Mock

mockedUseSwitchUnityMeasures.mockReturnValue({
  showMilesPerHour: false,
})

interface Wind {
  miles: number
  kilometers: number
}

const sut = (wind: Wind | undefined) => {
  const element = render(<WindSpeed windSpeed={wind} />)

  return {
    element,
  }
}

describe('WindSpeed Component', () => {
  describe('value', () => {
    it('should render the with the value if passed', () => {
      sut({
        miles: 25,
        kilometers: 25,
      })

      const text = screen.getByTestId('text-id')
      const wind = screen.getByTestId('blue200')

      expect(text).toBeInTheDocument()
      expect(text.textContent).toEqual(expect.stringContaining('25'))
      expect(wind).toBeInTheDocument()
    })
    it('should render with "- -" if no value is passed', () => {
      sut(undefined)

      const text = screen.getByTestId('text-id')
      const wind = screen.getByTestId('blue200')

      expect(text).toBeInTheDocument()
      expect(text.textContent).toBe('- -')
      expect(wind).toBeInTheDocument()
    })
  })
  describe('show kilometers', () => {
    it('should render the with the value of miles if showMilesPerHour is false', () => {
      sut({
        miles: 0,
        kilometers: 25,
      })

      const text = screen.getByTestId('text-id')

      expect(text.textContent).toBe('25K/h')
    })
    it('should render the with the value of kilometers if showMilesPerHour is true', () => {
      mockedUseSwitchUnityMeasures.mockReturnValue({
        showMilesPerHour: true,
      })

      sut({
        miles: 25,
        kilometers: 80,
      })

      const text = screen.getByTestId('text-id')

      expect(text.textContent).toBe('25M/h')
    })
  })
})
