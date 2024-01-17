import { styled } from '@/styles'

export const CardContainer = styled('div', {
  backgroundColor: '$green100',
  padding: '8px',
  width: '100%',
  border: '1px solid $blue900',
  variants: {
    radius: {
      equal: {
        borderRadius: '6px',
      },
      mixed: {
        borderRadius: '6px 24px',
      },
    },
  },
  defaultVariants: {
    radius: 'equal',
  },
})
