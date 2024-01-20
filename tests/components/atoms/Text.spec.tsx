import { render, screen } from '@testing-library/react'
import React, { ReactNode } from 'react'
import { describe, expect, it } from 'vitest'

import { Text } from '../../../src/components/atoms/Text'

const sut = (children: ReactNode) => {
  const element = render(<Text>{children}</Text>)

  return {
    element,
  }
}

describe('Text Component', () => {
  it('should render the Text component with children', () => {
    sut('Test')

    const text = screen.getByText('Test')

    expect(text).toBeInTheDocument()
  })
})
