import { styled } from '@/styles'

export const InputComponent = styled('input', {
  all: 'unset',
  fontFamily: '$default',
  fontSize: '$m',
  lineHeight: '$base',
  width: '100%',

  color: '$blue700',

  '&:placeholder': {
    color: '$gray300',
  },
})

export const InputContainer = styled('label', {
  backgroundColor: '$green100',
  border: '1px solid $green200',
  borderRadius: '6px',
  padding: '6px',
  width: '100%',

  '&:has(input:focus)': {
    borderColor: '$green900',
  },
})
