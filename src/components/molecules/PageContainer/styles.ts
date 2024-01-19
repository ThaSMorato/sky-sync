import { styled } from '@/styles'

export const PageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  minHeight: 'max-content',
  position: 'relative',
  variants: {
    pad: {
      noPadTop: {
        padding: '0 16px',
      },
      default: {
        padding: '16px',
      },
    },
    background: {
      header: {
        backgroundColor: '$blue900',
      },
      body: {
        background: 'linear-gradient(125deg, $blue400 7.7%, $blue200 94.58%)',
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
  minHeight: 'max-content',
  flexDirection: 'column',
})
