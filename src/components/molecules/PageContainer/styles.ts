import { styled } from '@/styles'

export const PageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  variants: {
    pad: {
      noPadTop: {
        padding: '0 16px',
      },
      default: {
        padding: '16px',
      },
    },
  },
  defaultVariants: {
    pad: 'default',
  },
})

export const PageContent = styled('div', {
  width: '100%',
  maxWidth: '$maxSize',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})
