import { render, screen } from '@testing-library/react'
import React, { ReactNode } from 'react'
import { describe, expect, it, vitest } from 'vitest'

import { PageContainer } from '../../../src/components/molecules/PageContainer'

vitest.mock('../../../src/components/molecules/PageContainer/styles', () => {
  const PageContainerMock = ({ children }: { children: ReactNode }) => (
    <div data-testid="page-container-id">{children}</div>
  )
  const PageContentMock = ({ children }: { children: ReactNode }) => (
    <div data-testid="page-content-id">{children}</div>
  )
  return {
    PageContainer: PageContainerMock,
    PageContent: PageContentMock,
  }
})

const sut = (children: ReactNode) => {
  const element = render(<PageContainer>{children}</PageContainer>)

  return {
    element,
  }
}

describe('PageContainer Component', () => {
  it('should render the PageContainer component with children', () => {
    sut(<p>children</p>)

    const container = screen.getByTestId('page-container-id')
    const content = screen.getByTestId('page-content-id')
    const childrenComponent = screen.getByText('children')

    expect(container).toBeInTheDocument()
    expect(content).toBeInTheDocument()
    expect(childrenComponent).toBeInTheDocument()
  })
})
