import { render, screen } from '@testing-library/react'
import React, { ReactNode } from 'react'
import { describe, expect, it, vitest } from 'vitest'

import { Footer } from '../../../src/components/templates/Footer'

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

vitest.mock('../../../src/components/templates/Footer/styles', () => {
  const FooterActionsMock = ({ children }: { children: ReactNode }) => (
    <div data-testid="footerActions-id">{children}</div>
  )
  const FooterAnchorMock = ({ children }: { children: ReactNode }) => (
    <div data-testid="footerAnchor-id">{children}</div>
  )
  const FooterCotainerMock = ({ children }: { children: ReactNode }) => (
    <div data-testid="footerContainer-id">{children}</div>
  )

  return {
    FooterActions: FooterActionsMock,
    FooterAnchor: FooterAnchorMock,
    FooterCotainer: FooterCotainerMock,
  }
})
vitest.mock('phosphor-react', (defaultLib) => {
  const GithubLogoMock = () => <span data-testid="githubLogo-id" />
  const LinkedinLogoMock = () => <span data-testid="linkedinLogo-id" />

  return {
    ...defaultLib,
    GithubLogo: GithubLogoMock,
    LinkedinLogo: LinkedinLogoMock,
  }
})

const sut = () => {
  const element = render(<Footer />)

  return {
    element,
  }
}

describe('Footer component', () => {
  it('should render the footer component', () => {
    sut()

    const pageContainer = screen.getByTestId('pageContainer-id')
    const footerContainer = screen.getByTestId('footerContainer-id')
    const footerActions = screen.getByTestId('footerActions-id')
    const gitLogo = screen.getByTestId('githubLogo-id')
    const footerAnchors = screen.getAllByTestId('footerAnchor-id')
    const linkedinLogo = screen.getByTestId('linkedinLogo-id')
    const text = screen.getByTestId('text-id')

    expect(pageContainer).toBeInTheDocument()
    expect(footerContainer).toBeInTheDocument()
    expect(footerActions).toBeInTheDocument()
    expect(gitLogo).toBeInTheDocument()
    expect(linkedinLogo).toBeInTheDocument()
    expect(text).toBeInTheDocument()
    footerAnchors.forEach((footerAnchor) =>
      expect(footerAnchor).toBeInTheDocument(),
    )
    expect(text.textContent).toEqual(expect.stringContaining('Thales Morato'))
  })
})
