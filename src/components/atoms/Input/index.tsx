import { ComponentProps } from 'react'

import { InputComponent, InputContainer } from './styles'

interface InputProps extends ComponentProps<typeof InputComponent> {}

export const Input = (props: InputProps) => {
  return (
    <InputContainer>
      <InputComponent {...props} />
    </InputContainer>
  )
}
