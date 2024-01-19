import { keyframes, styled } from '@/styles'

const spin = keyframes({
  '100%': {
    '-webkit-transform': 'rotate(360deg)',
    transform: 'rotate(360deg)',
  },
})

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '0 16px 16px 0',
  borderTop: '1px solid black',
  borderRight: '1px solid black',
  borderBottom: '1px solid black',
  animation: 'all 0.5s ease-out',
  fontWeight: '$bold',
  width: 'calc(100% -1px)',
  height: 'calc(100% -2px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:not(:disabled):hover': {
    cursor: 'pointer',
  },

  '&:disabled': {
    opacity: 0.7,
    cursor: 'not-allowed',
    svg: {
      '-webkit-animation': `${spin} 4s linear infinite`,
      '-moz-animation': `${spin} 4s linear infinite`,
      animation: `${spin} 4s linear infinite`,
    },
  },

  variants: {
    variant: {
      yellow: {
        borderColor: '$yellow',
        backgroundColor: '$yellow',
        color: '$blue900',

        '&:not(:disabled):hover': {
          borderColor: '$yellow',
          backgroundColor: '$blue900',
          color: '$yellow',
        },
      },
      purple: {
        borderColor: '$red100',
        backgroundColor: '$purple',
        color: '$red100',

        '&:not(:disabled):hover': {
          borderColor: '$red100',
          backgroundColor: '$red100',
          color: '$purple',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'yellow',
  },
})
