import { styled } from '@/styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '6px',
  padding: '6px 12px',
  border: '1px solid black',
  fontFamily: '$default',
  animation: 'all 0.5s ease-out',
  fontWeight: '$bold',
  minWidth: 'max-content',
  '&:hover': {
    cursor: 'pointer',
  },
  variants: {
    variant: {
      red: {
        borderColor: '$red900',
        backgroundColor: '$red100',
        color: '$red900',

        '&:hover': {
          borderColor: '$red100',
          backgroundColor: '$red900',
          color: '$red100',
        },
      },
      blue: {
        borderColor: '$blue900',
        backgroundColor: '$blue200',
        color: '$blue900',

        '&:hover': {
          borderColor: '$blue200',
          backgroundColor: '$blue900',
          color: '$blue200',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'red',
  },
})
