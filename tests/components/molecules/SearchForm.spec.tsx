import { createEvent, fireEvent, render, screen } from '@testing-library/react'
import React, { ChangeEvent, ReactNode } from 'react'
import { describe, expect, it, vitest } from 'vitest'

import { SearchForm } from '../../../src/components/molecules/SearchForm'

vitest.mock('../../../src/components/molecules/SearchForm/styles', () => {
  const FormContainerMock = ({ children }: { children: ReactNode }) => (
    <form data-testid="container-id">{children}</form>
  )

  return {
    FormContainer: FormContainerMock,
  }
})

vitest.mock('../../../src/components/atoms/Button', () => {
  const ButtonMock = ({
    children,
    variant,
  }: {
    children: ReactNode
    variant: string
  }) => <button data-testid={variant}>{children}</button>

  return {
    Button: ButtonMock,
  }
})

vitest.mock('../../../src/components/atoms/Input', () => {
  const InputMock = ({
    onChange,
    value,
  }: {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    value: string
  }) => <input value={value} onChange={onChange} />

  return {
    Input: InputMock,
  }
})

const sut = (value: string, variant: string, children: ReactNode) => {
  const onChangeInput = vitest.fn()
  const element = render(
    <SearchForm
      buttonVariant={variant}
      value={value}
      onInputChange={onChangeInput}
    >
      {children}
    </SearchForm>,
  )

  return {
    element,
    onChangeInput,
  }
}

describe('SearchForm Component', () => {
  it('should render the SearchForm component', () => {
    sut('a value', 'variant-a', 'Test')

    const form = screen.getByTestId('container-id')
    const button = screen.getByTestId('variant-a')
    const input = screen.getByDisplayValue('a value')
    const buttonByChildren = screen.getByText('Test')

    expect(form).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(buttonByChildren).toBeInTheDocument()
    expect(button).toBe(buttonByChildren)
  })

  it.todo('should call onChangeInput when input changes', () => {
    const { onChangeInput } = sut('a value', 'variant-a', 'Test')

    const input = screen.getByDisplayValue('a value')
    const event = createEvent('change', input, undefined, {
      EventType: 'ChangeEvent<HTMLInputElement>',
    })

    fireEvent(input, event)

    expect(onChangeInput).toHaveBeenCalled()
  })
})
