import { render, screen } from '@testing-library/react'
import React, { ReactNode } from 'react'
import { describe, expect, it, vitest } from 'vitest'

import { Button } from '../../../src/components/atoms/Button'

const sut = (children: ReactNode) => {
  const onClick = vitest.fn()
  const element = render(<Button onClick={onClick}>{children}</Button>)

  return {
    element,
    onClick,
  }
}

describe('Button Component', () => {
  it('should render the Button component with children', () => {
    sut('Test')

    const text = screen.getByText('Test')

    expect(text).toBeInTheDocument()
  })
  it('should call onClick callback on click', () => {
    const { onClick } = sut('Test')

    const button = screen.getByText('Test')

    button.click()

    expect(onClick).toHaveBeenCalled()
  })
})
