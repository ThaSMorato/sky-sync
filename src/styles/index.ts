import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  css,
} = createStitches({
  theme: {
    colors: {
      yellow: '#FDD700',

      blue900: '#001F3F',
      blue700: '#07305A',
      blue600: '#5C85EF',
      blue500: '#346CA6',
      blue400: '#6EA9E8',
      blue200: '#80A7D1',
      blue100: '#1CAEED',

      green100: '#DEEDEB',
      green200: '#9ED2B4',
      green300: '#2ECCA6',
      green500: '#2ECC71',

      gray100: '#D3D3D3',
      gray200: '#D9D9D9',
      gray300: '#DEEDEB',
      gray400: '#8FA4BA',

      red100: '#D98880',
      red600: '#DE493A',
      red900: '#b21a0c',

      purple: '#8780D9',
    },
    fontSizes: {
      titleXL: '4.5rem', // 72
      titleL: '2.25rem', // 36
      titleM: '2rem', // 32
      titleS: '1.625rem', // 26
      xl: '1.5rem', // 24
      l: '1.125rem', // 18
      m: '1.625rem',
      s: '1.25rem', // 20
      xs: '1rem',
    },
    fonts: {
      default: 'Roboto, sans-serif',
      title: "'Baloo 2', sans-serif",
      mono: "'Roboto Mono', sans-serif",
    },
    lineHeights: {
      base: '130%',
      tall: '160%',
    },
    sizes: {
      maxSize: '1440px',
    },
    space: {
      gridGap: '12px',
    },
    fontWeights: {
      regular: '400',
      bold: '700',
      xbold: '800',
    },
  },
})
