import { styled } from '@/styles'

export const Text = styled('p', {
  margin: '0',

  variants: {
    size: {
      titleXL: { fontSize: '$titleXL' },
      titleL: { fontSize: '$titleL' },
      titleM: { fontSize: '$titleM' },
      titleS: { fontSize: '$titleS' },
      xl: { fontSize: '$xl' },
      l: { fontSize: '$l' },
      m: { fontSize: '$m' },
      s: { fontSize: '$s' },
      xs: { fontSize: '$xs' },
    },
    font: {
      roboto: { fontFamily: '$default' },
      baloo: { fontFamily: '$title' },
      mono: { fontFamily: '$mono' },
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
      hot: { color: '$red600' },
      average: { color: '$green300' },
      cold: { color: '$blue100' },
      wind: { color: '$blue200' },
      description: { color: '$blue500' },
      city: { color: '$purple' },
      subtitle: { color: '$gray100' },
      title: { color: '$green500' },
      logo: { color: '$yellow' },
      footer: { color: '$gray300' },
      humidity: { color: '$blue600' },
      error: { color: '$red900' },
    },
    spacing: {
      title: { letterSpacing: '8%' },
      default: { letterSpacing: '0' },
      date: { letterSpacing: '7%' },
    },
  },
  defaultVariants: {
    weight: 'regular',
    lineHeight: 'base',
    font: 'roboto',
    size: 's',
    color: 'default',
    spacing: 'default',
  },
})
