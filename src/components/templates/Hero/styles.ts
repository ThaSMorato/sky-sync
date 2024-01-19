import { styled } from '@/styles'

export const HeroContainer = styled('div', {
  height: '100%',
  width: '100%',
  minHeight: '754px',
  maxHeight: '754px',
  padding: '0 128px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '&::after': {
    content: `''`,
    display: 'block',
    position: 'absolute',
    bottom: '-1px',
    left: '0px',
    width: '100vw',
    height: '1px',
    backgroundColor: '$red100',
  },
})

export const HeroTextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '33px',
  width: '470px',
})

export const HeroFigure = styled('figure', {
  width: '470px',
  height: '470px',
  overflow: 'hidden',
  minHeight: '470px',
  minWidth: '470px',
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
