import { ChangeEvent, ComponentProps, ReactNode } from 'react'

import { Button } from '@/components/atoms/Button'
import { Input } from '@/components/atoms/Input'

import { FormContainer } from './styles'

interface SearchFormProps extends ComponentProps<typeof FormContainer> {
  onInputChange?: (event: ChangeEvent<HTMLInputElement>) => void
  value?: string
  buttonVariant?: ComponentProps<typeof Button>['variant']
  inputVariant?: ComponentProps<typeof Input>['variant']
  children?: ReactNode
  disabled?: boolean
}

export const SearchForm = ({
  onInputChange,
  value,
  variant,
  buttonVariant,
  inputVariant,
  children,
  disabled,
  ...props
}: SearchFormProps) => {
  return (
    <FormContainer {...props} variant={variant}>
      <Input
        placeholder="Search a city"
        type="text"
        onChange={onInputChange}
        value={value}
        variant={inputVariant}
      />
      <Button variant={buttonVariant} disabled={disabled}>
        {children}
      </Button>
    </FormContainer>
  )
}
