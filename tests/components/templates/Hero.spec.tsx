import { render, screen } from '@testing-library/react'
import React, { ReactNode } from 'react'
import { describe, expect, it, vitest } from 'vitest'

import { Hero } from '../../../src/components/templates/Hero'

vitest.mock('../../../src/components/atoms/Text', () => {
  const TextMock = ({ children }: { children?: ReactNode }) => (
    <p data-testid="text-id">{children}</p>
  )

  return {
    Text: TextMock,
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

vitest.mock('../../../src/components/templates/Hero/styles', () => {
  const HeroContainerMock = ({ children }: { children: ReactNode }) => (
    <div data-testid="heroContainer-id">{children}</div>
  )
  const HeroFigureMock = ({ children }: { children: ReactNode }) => (
    <div data-testid="heroFigure-id">{children}</div>
  )
  const HeroTextContainerMock = ({ children }: { children: ReactNode }) => (
    <div data-testid="heroTextContainer-id">{children}</div>
  )

  return {
    HeroContainer: HeroContainerMock,
    HeroFigure: HeroFigureMock,
    HeroTextContainer: HeroTextContainerMock,
  }
})
vitest.mock('../../../src/assets/fadein_img.svg', () => {
  return {
    default: 'sun.url',
  }
})

const sut = () => {
  const element = render(<Hero />)

  return {
    element,
  }
}

describe('Hero component', () => {
  it('should render the Hero component', () => {
    sut()

    const pageContainer = screen.getByTestId('pageContainer-id')
    const heroContainer = screen.getByTestId('heroContainer-id')
    const heroFigure = screen.getByTestId('heroFigure-id')
    const heroTextContainer = screen.getByTestId('heroTextContainer-id')
    const text = screen.getAllByTestId('text-id')
    const img = screen.getByRole('img')

    expect(pageContainer).toBeInTheDocument()
    expect(heroContainer).toBeInTheDocument()
    expect(heroFigure).toBeInTheDocument()
    expect(heroTextContainer).toBeInTheDocument()
    expect(img).toBeInTheDocument()
    text.forEach((txt) => expect(txt).toBeInTheDocument())
  })
})
