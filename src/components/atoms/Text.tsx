import { styled } from '@/styles'

export const Text = styled('p', {
  margin: '0',

  variants: {
    size: {
      titleXL: { fontSize: '$titleXL' },
      titleL: { fontSize: '$titleL' },
      titleM: { fontSize: '$titleM' },
      titleS: { fontSize: '$titleS' },
      titleXS: { fontSize: '$titleXS' },
      l: { fontSize: '$l' },
      m: { fontSize: '$m' },
      s: { fontSize: '$s' },
      xs: { fontSize: '$xs' },
      tag: { fontSize: '$tag' },
    },
    font: {
      roboto: { fontFamily: '$default' },
      baloo: { fontFamily: '$title' },
    },
    lineHeight: {
      base: { lineHeight: '$base' },
      tall: { lineHeight: '$tall' },
    },
    weight: {
      regular: { fontWeight: '$regular' },
      bold: { fontWeight: '$bold' },
      xbold: { fontWeight: '$xbold' },
    },
    color: {
      subtitle: { color: '$green400' },
      title: { color: '$blue600' },
      default: { color: '$gray200' },
      logo: { color: '$blue900' },
      properties: { color: '$gray800' },
      blue: { color: '$blue900' },
      yellow: { color: '$darkYellow' },
      lightBlue: { color: '$lightBlue500' },
      green: { color: '$green200' },
      red: { color: '$red200' },
    },
  },
  defaultVariants: {
    weight: 'regular',
    lineHeight: 'base',
    font: 'roboto',
    size: 's',
    color: 'default',
  },
})
