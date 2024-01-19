import { ComponentProps } from 'react'

import { InputComponent, InputContainer } from './styles'

interface InputProps extends ComponentProps<typeof InputComponent> {
  variant?: ComponentProps<typeof InputContainer>['variant']
}

export const Input = ({ variant, ...props }: InputProps) => {
  return (
    <InputContainer variant={variant}>
      <InputComponent {...props} />
    </InputContainer>
  )
}
