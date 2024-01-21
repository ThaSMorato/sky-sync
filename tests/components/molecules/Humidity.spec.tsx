import { render, screen } from '@testing-library/react'
import React, { ReactNode } from 'react'
import { describe, expect, it, vitest } from 'vitest'

import { Humidity } from '../../../src/components/molecules/Humidity'

vitest.mock('../../../src/components/atoms/Text', () => {
  const TextMock = ({ children }: { children?: ReactNode }) => (
    <p data-testid="text-id">{children}</p>
  )

  return {
    Text: TextMock,
  }
})

vitest.mock('../../../src/styles', (deafultImport) => {
  const themeMock = {
    colors: { blue600: 'blue600' },
  }

  return {
    ...deafultImport,
    theme: themeMock,
  }
})

vitest.mock('phosphor-react', (defaultImport) => {
  const DropMock = ({ color }: { color: string }) => (
    <p data-testid={color}>drop</p>
  )

  return {
    ...defaultImport,
    Drop: DropMock,
  }
})

const sut = (humidity: number | undefined) => {
  const element = render(<Humidity humidity={humidity} />)

  return {
    element,
  }
}

describe('Humidity Component', () => {
  it('should render the with the value if passed', () => {
    sut(80)

    const text = screen.getByText('80 %')
    const drop = screen.getByTestId('blue600')

    expect(text).toBeInTheDocument()
    expect(drop).toBeInTheDocument()
  })
  it('should render with "- -" if no value is passed', () => {
    sut(undefined)

    const text = screen.getByText('- -')
    const drop = screen.getByTestId('blue600')

    expect(text).toBeInTheDocument()
    expect(drop).toBeInTheDocument()
  })
})
