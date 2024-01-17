import { CardContainer } from '@/components/atoms/CardContainer'
import { styled } from '@/styles'

export const CurrentWeatherContainer = styled(CardContainer, {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gap: '6px',
  padding: '16px',
})

export const CurrentImageContainer = styled('figure', {
  width: '120px',
  height: '120px',
  borderRadius: '100%',
  overflow: 'hidden',
  minHeight: '120px',
  minWidth: '120px',
  position: 'relative',

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
  justifyContent: 'space-evenly',
  flexDirection: 'column',
  gap: '15px',
  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: '15px',
  },
})
