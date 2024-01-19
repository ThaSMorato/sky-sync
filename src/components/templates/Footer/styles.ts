import { styled } from '@/styles'

export const FooterCotainer = styled('div', {
  height: '100%',
  minHeight: '106px',
  maxHeight: '106px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderTop: '1px solid $blue700',
})

export const FooterActions = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '28px',
})

export const FooterAnchor = styled('a', {
  all: 'unset',
  width: '40px',
  height: '40px',
  borderRadius: '16px',
  backgroundColor: '$blue700',
  color: '$gray200',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '$blue400',
    color: '$gray100',
  },
})
