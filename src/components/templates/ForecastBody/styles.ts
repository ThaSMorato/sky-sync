import { styled } from '@/styles'

export const ForecastBodyContainer = styled('div', {
  width: '100%',
  height: '100%',
  position: 'relative',
  paddingTop: '110px',
  paddingBottom: '223px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
})

export const ForecastFormContainer = styled('div', {
  position: 'absolute',
  width: '100%',
  maxWidth: '714px',
  top: '-31px',
  left: 'calc(50% - 714px / 2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
})

export const ForecastError = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$red900',
  gap: '6px',
  lineHeight: 0,
  paddingTop: '15px',
})
