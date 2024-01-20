import { render, screen } from '@testing-library/react'
import React, { ReactNode } from 'react'
import { describe, expect, it } from 'vitest'

import { CardContainer } from '../../../src/components/atoms/CardContainer'

const sut = (children: ReactNode) => {
  const element = render(
    <CardContainer data-testid="container-id">{children}</CardContainer>,
  )

  return {
    element,
  }
}

describe('CardContainer Component', () => {
  it('should render the CardContainer component with children', () => {
    sut(<p data-testid="children-id">Test</p>)

    const cardContainer = screen.getByTestId('children-id')
    const container = screen.getByTestId('container-id')

    expect(cardContainer).toBeInTheDocument()
    expect(container).toBeInTheDocument()
  })
})
