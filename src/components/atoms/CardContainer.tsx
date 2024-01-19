import { styled } from '@/styles'

export const CardContainer = styled('div', {
  backgroundColor: '$green100',
  width: '100%',
  height: '100%',
  borderRadius: '16px',
  variants: {
    shaddow: {
      withShaddow: {
        boxShadow: '1px 1px 4px 1px rgba(0, 31, 63, 0.58)',
      },
    },
  },
})
