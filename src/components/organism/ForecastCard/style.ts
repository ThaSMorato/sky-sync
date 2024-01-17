import { CardContainer } from '@/components/atoms/CardContainer'
import { styled } from '@/styles'

export const CurrentWeatherContainer = styled(CardContainer, {
  display: 'grid',
  gridTemplateRows: '2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
  gap: '3px',
  padding: '16px 6px',
})

export const CurrentImageContainer = styled('figure', {
  width: '60px',
  height: '60px',
  borderRadius: '100%',
  overflow: 'hidden',
  minHeight: '60px',
  minWidth: '60px',
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
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '6px',
  '>div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: '12px',
  },
})
