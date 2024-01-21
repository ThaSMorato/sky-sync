import { fireEvent, render, screen } from '@testing-library/react'
import React, { ChangeEvent, FormEvent, ReactNode } from 'react'
import { describe, expect, it, Mock, vitest } from 'vitest'

import { Header } from '../../../src/components/templates/Header'
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
vitest.mock('../../../src/components/molecules/PageContainer', () => {
  const PageContainerMock = ({ children }: { children?: ReactNode }) => (
    <div data-testid="pageContainer-id">{children}</div>
  )

  return {
    PageContainer: PageContainerMock,
  }
})

vitest.mock('../../../src/components/templates/Header/styles', () => {
  const HeaderContainerMock = ({ children }: { children: ReactNode }) => (
    <div data-testid="headerContainer-id">{children}</div>
  )

  return {
    HeaderContainer: HeaderContainerMock,
  }
})
vitest.mock('phosphor-react', (defaultLib) => {
  const CircleNotchMock = () => <span data-testid="circleNotch-id" />
  const MagnifyingGlassMock = () => <span data-testid="magnifyingGlass-id" />
  return {
    ...defaultLib(),
    CircleNotch: CircleNotchMock,
    MagnifyingGlass: MagnifyingGlassMock,
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
  const element = render(<Header />)

  return {
    element,
  }
}

describe('Header component', () => {
  describe('render', () => {
    it('should render the Header component', () => {
      sut()

      const circleNotch = screen.queryByTestId('circleNotch-id')
      const magnifyingGlass = screen.queryByTestId('magnifyingGlass-id')
      const pageContainer = screen.getByTestId('pageContainer-id')
      const headerContainer = screen.getByTestId('headerContainer-id')
      const texts = screen.queryAllByTestId('text-id')
      const searchForm = screen.getByTestId('searchForm-id')

      expect(pageContainer).toBeInTheDocument()
      expect(magnifyingGlass).toBeInTheDocument()
      expect(headerContainer).toBeInTheDocument()
      expect(searchForm).toBeInTheDocument()
      expect(circleNotch).not.toBeInTheDocument()
      texts.forEach((text) => {
        expect(text).toBeInTheDocument()
        expect(text.textContent).toBe('SkySync')
      })
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
      const [_logo, text] = screen.queryAllByTestId('text-id')

      expect(magnifyingGlass).not.toBeInTheDocument()

      expect(circleNotch).toBeInTheDocument()
      expect(text).toBeInTheDocument()
      expect(text?.textContent).toEqual(
        expect.stringContaining('An error occurred'),
      )
    })
  })
})
