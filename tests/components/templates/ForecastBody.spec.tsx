import { fireEvent, render, screen } from '@testing-library/react'
import React, { ChangeEvent, FormEvent, ReactNode } from 'react'
import { describe, expect, it, Mock, vitest } from 'vitest'

import { ForecastBody } from '../../../src/components/templates/ForecastBody'
import { useWeathers } from '../../../src/hooks/useWeathers'

vitest.mock('../../../src/components/atoms/Text', () => {
  const TextMock = ({ children }: { children?: ReactNode }) => (
    <p data-testid="text-id">{children}</p>
  )

  return {
    Text: TextMock,
  }
})
vitest.mock('../../../src/components/molecules/SearchForm', () => {
  const SearchFormMock = ({
    disabled,
    value,
    onSubmit,
    onInputChange,
    children,
  }: {
    disabled: boolean
    value: string
    onSubmit: (e: FormEvent) => void
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    children: ReactNode
  }) => (
    <form onSubmit={onSubmit} data-testid="searchForm-id">
      <input value={value} onChange={onInputChange} />
      <button role="button" disabled={disabled}>
        search
      </button>
      {children}
    </form>
  )

  return {
    SearchForm: SearchFormMock,
  }
})
vitest.mock('../../../src/components/organism/ForecastCards', () => {
  const ForecastCardsMock = () => <div data-testid="forecastCards-id" />

  return {
    ForecastCards: ForecastCardsMock,
  }
})
vitest.mock('../../../src/components/organism/Switchs', () => {
  const SwitchsMock = () => <div data-testid="switchs-id" />

  return {
    Switchs: SwitchsMock,
  }
})
vitest.mock('../../../src/components/molecules/PageContainer', () => {
  const PageContainerMock = ({ children }: { children?: ReactNode }) => (
    <div data-testid="pageContainer-id">{children}</div>
  )

  return {
    PageContainer: PageContainerMock,
  }
})
vitest.mock('../../../src/components/templates/Footer', () => {
  const FooterMock = () => <div data-testid="footer-id" />

  return {
    Footer: FooterMock,
  }
})
vitest.mock('../../../src/components/templates/ForecastBody/styles', () => {
  const ForecastBodyContainerMock = ({ children }: { children: ReactNode }) => (
    <div data-testid="forecastBodyContainer-id">{children}</div>
  )
  const ForecastErrorMock = ({ children }: { children: ReactNode }) => (
    <div data-testid="forecastError-id">{children}</div>
  )
  const ForecastFormContainerMock = ({ children }: { children: ReactNode }) => (
    <div data-testid="forecastFormContainer-id">{children}</div>
  )

  return {
    ForecastBodyContainer: ForecastBodyContainerMock,
    ForecastError: ForecastErrorMock,
    ForecastFormContainer: ForecastFormContainerMock,
  }
})
vitest.mock('phosphor-react', (defaultLib) => {
  const CircleNotchMock = () => <span data-testid="circleNotch-id" />
  const MagnifyingGlassMock = () => <span data-testid="magnifyingGlass-id" />
  const WarningMock = () => <span data-testid="warning-id" />
  return {
    ...defaultLib,
    CircleNotch: CircleNotchMock,
    MagnifyingGlass: MagnifyingGlassMock,
    Warning: WarningMock,
  }
})
vitest.mock('../../../src/hooks/useWeathers', () => {
  const useWeathersMock = vitest.fn()

  return {
    useWeathers: useWeathersMock,
  }
})

const useWeathersValue = {
  isLoading: false,
  error: false,
  fetchWeathersByCity: vitest.fn(),
}

const useWeathersMocked = useWeathers as Mock

useWeathersMocked.mockReturnValue(useWeathersValue)

const sut = () => {
  const element = render(<ForecastBody />)

  return {
    element,
  }
}

describe('ForecastBody component', () => {
  describe('render', () => {
    it('should render the ForecastBody component', () => {
      sut()

      const circleNotch = screen.queryByTestId('circleNotch-id')
      const magnifyingGlass = screen.queryByTestId('magnifyingGlass-id')
      const warning = screen.queryByTestId('warning-id')
      const footer = screen.getByTestId('footer-id')
      const pageContainer = screen.getByTestId('pageContainer-id')
      const forecastContainer = screen.getByTestId('forecastBodyContainer-id')
      const forecastError = screen.queryByTestId('forecastError-id')
      const forecastFormContainer = screen.getByTestId(
        'forecastFormContainer-id',
      )
      const text = screen.queryByTestId('text-id')
      const switchs = screen.getByTestId('switchs-id')
      const forecastCards = screen.getByTestId('forecastCards-id')
      const searchForm = screen.getByTestId('searchForm-id')

      expect(pageContainer).toBeInTheDocument()
      expect(magnifyingGlass).toBeInTheDocument()
      expect(footer).toBeInTheDocument()
      expect(forecastContainer).toBeInTheDocument()
      expect(forecastFormContainer).toBeInTheDocument()
      expect(switchs).toBeInTheDocument()
      expect(forecastCards).toBeInTheDocument()
      expect(searchForm).toBeInTheDocument()
      expect(forecastError).not.toBeInTheDocument()
      expect(warning).not.toBeInTheDocument()
      expect(circleNotch).not.toBeInTheDocument()
      expect(text).not.toBeInTheDocument()
    })
  })
  describe('state and hook', () => {
    it('should update the state and call fetchWeathersByCity', () => {
      sut()
      const searchForm = screen.getByTestId('searchForm-id')
      const [input, button] = [...searchForm.childNodes.values()]

      fireEvent.change(input, { target: { value: 'test' } })

      fireEvent.click(button)

      expect(useWeathersValue.fetchWeathersByCity).toBeCalledWith('test')
    })
    it('should render the feedback from the hook', () => {
      useWeathersMocked.mockReturnValue({
        ...useWeathersValue,
        isLoading: true,
        error: 'An error occurred',
      })

      sut()
      const circleNotch = screen.queryByTestId('circleNotch-id')
      const magnifyingGlass = screen.queryByTestId('magnifyingGlass-id')
      const warning = screen.queryAllByTestId('warning-id')
      const text = screen.queryByTestId('text-id')
      const forecastError = screen.queryByTestId('forecastError-id')

      expect(magnifyingGlass).not.toBeInTheDocument()

      expect(forecastError).toBeInTheDocument()
      warning.map((war) => expect(war).toBeInTheDocument())
      expect(circleNotch).toBeInTheDocument()
      expect(text).toBeInTheDocument()
      expect(text?.textContent).toEqual(
        expect.stringContaining('An error occurred'),
      )
    })
  })
})
