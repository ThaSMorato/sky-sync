import { styled } from '@/styles'

export const InputComponent = styled('input', {
  all: 'unset',
  fontFamily: '$default',
  fontSize: 'inherit',
  lineHeight: '$base',
  width: '100%',

  '&:placeholder': {
    color: '$green200',
  },
})

export const InputContainer = styled('label', {
  border: '1px solid black',
  borderRadius: '16px 0 0 16px',
  width: '100%',
  variants: {
    variant: {
      yellow: {
        borderColor: '$yellow',
        blue900: '$yellow',
        color: '$gray100',
        padding: '10px 0 12px 10px ',
        fontSize: '$xs',
      },
      purple: {
        borderColor: '$red100',
        backgroundColor: '$green100',
        color: '$blue900',
        padding: '17px 0 17px 20px',
        fontSize: '$s',
      },
    },
  },
  defaultVariants: {
    variant: 'yellow',
  },
})
