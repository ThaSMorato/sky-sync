import { render, screen } from '@testing-library/react'
import React, { ReactNode } from 'react'
import { describe, expect, it, vitest } from 'vitest'

import { Switch } from '../../../src/components/atoms/Switch'

vitest.mock('../../../src/components/atoms/Switch/styles', () => {
  const SwitchWrapperMock = ({ children }: { children: ReactNode }) => (
    <label data-testid="label-id">{children}</label>
  )
  const SwitchInputMock = () => <input data-testid="input-id" />
  const SwtichSliderMock = () => <span data-testid="span-id" />

  return {
    SwitchWrapper: SwitchWrapperMock,
    SwitchInput: SwitchInputMock,
    SwtichSlider: SwtichSliderMock,
  }
})

const sut = () => {
  const element = render(<Switch />)

  return {
    element,
  }
}

describe('Switch Component', () => {
  it('should render the Switch component', () => {
    sut()

    const input = screen.getByTestId('input-id')
    const label = screen.getByTestId('label-id')
    const span = screen.getByTestId('span-id')

    expect(input).toBeInTheDocument()
    expect(label).toBeInTheDocument()
    expect(span).toBeInTheDocument()
  })
})
