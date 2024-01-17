import { styled } from '@/styles'

export const CurrentWeatherTag = styled('span', {
  padding: '3px 6px',
  borderRadius: '100px',
  border: '1px solid black',
  fontFamily: '$title',
  lineHeight: '$base',
  fontSize: '$tag',
  display: 'block',
  textAlign: 'center',
  variants: {
    variant: {
      blueAndYellow: {
        backgroundColor: '$blue100',
        color: '$darkYellow',
        borderColor: '$blue900',
      },
      darkBlue: {
        backgroundColor: '$blue100',
        color: '$blue500',
        borderColor: '$blue900',
      },
      gray: {
        backgroundColor: '$gray100',
        color: '$gray500',
        borderColor: '$gray900',
      },
      blue: {
        backgroundColor: '$lightBlue100',
        color: '$lightBlue500',
        borderColor: '$lightBlue900',
      },
      default: {
        backgroundColor: '$gray100',
        color: '$gray500',
        borderColor: '$gray900',
      },
      yellow: {
        backgroundColor: '$yellow100',
        color: '$darkYellow',
        borderColor: '$yellow900',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})
