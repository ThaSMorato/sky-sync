import { styled } from '@/styles'

export const FormContainer = styled('form', {
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  width: '100%',
  height: '100%',
  variants: {
    variant: {
      header: {
        maxWidth: '349px',
        maxHeight: '44px',
      },
      body: {
        maxWidth: '714px',
        maxHeight: '62px',
      },
    },
  },
})
