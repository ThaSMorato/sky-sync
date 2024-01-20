import { render, screen } from '@testing-library/react'
import React, { ReactNode } from 'react'
import { describe, expect, it, vitest } from 'vitest'

import { Input } from '../../../src/components/atoms/Input'

vitest.mock('../../../src/components/atoms/Input/styles', () => {
  const InputContainerMock = ({ children }: { children: ReactNode }) => (
    <label data-testid="label-id">{children}</label>
  )
  const InputComponentMock = () => <input data-testid="input-id" />
  return {
    InputContainer: InputContainerMock,
    InputComponent: InputComponentMock,
  }
})

const sut = () => {
  const element = render(<Input />)

  return {
    element,
  }
}

describe('Input Component', () => {
  it('should render the Input component', () => {
    sut()

    const input = screen.getByTestId('input-id')
    const label = screen.getByTestId('label-id')

    expect(input).toBeInTheDocument()
    expect(label).toBeInTheDocument()
  })
})
