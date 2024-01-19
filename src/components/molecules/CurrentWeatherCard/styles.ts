import { CardContainer } from '@/components/atoms/CardContainer'
import { styled } from '@/styles'

export const CurrentWeatherContainer = styled(CardContainer, {
  maxWidth: '256px',
  maxHeight: '765px',
  padding: '32px 61px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const CurrentImageContainer = styled('figure', {
  width: '100px',
  height: '100px',
  borderRadius: '100%',
  overflow: 'hidden',
  minHeight: '100px',
  minWidth: '100px',
  position: 'relative',
  marginBottom: '22px',

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
  height: '100%',
  width: '100%',
  gap: '17px',
  '&:not(:first-child)': {
    padding: '54px 0',
  },
  '&+div': {
    borderTop: '1px solid $gray200',
  },
})
