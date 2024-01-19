import { CardContainer } from '@/components/atoms/CardContainer'
import { styled } from '@/styles'

export const CurrentWeatherContainer = styled(CardContainer, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px 55px',
  maxWidth: '244px',
})

export const CurrentImageContainer = styled('figure', {
  width: '60px',
  height: '60px',
  borderRadius: '100%',
  overflow: 'hidden',
  minHeight: '60px',
  minWidth: '60px',
  position: 'relative',
  marginBottom: '7px',

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center center',
    position: 'absolute',
    top: 0,
    left: 0,
  },
})

export const CurrentWeatherGrid = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  borderTop: '1px solid $gray200',
  gap: '21px',
  paddingTop: '23px',
  '>div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
  },
})
