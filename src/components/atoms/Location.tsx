import { styled } from '@/styles'

export const Location = styled('span', {
  backgroundColor: '$yellow100',
  border: '1px solid $green200',
  color: '$green600',
  borderRadius: '6px',
  padding: '6px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',
  maxWidth: 'fit-content',
  fontFamily: '$default',
  fontWeight: '$bold',
  lineHeight: '$base',
  fontSize: '$m',

  svg: {
    lineHeight: 0,
  },
})
