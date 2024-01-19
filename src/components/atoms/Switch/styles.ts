import { styled } from '@/styles'

export const SwitchWrapper = styled('label', {
  position: 'relative',
  display: 'inline-block',
  width: '57px',
  height: '38px',
  '&:has(input:checked)': {
    span: {
      '&::before': {
        '-webkit-transform': 'translateX(19px)',
        '-ms-transform': 'translateX(19px)',
        transform: 'translateX(19px)',
        backgroundColor: '$blue200',
      },
    },
  },
  '&:has(input:focus)': {
    boxShadow: 'box-shadow: 0 0 1px #2196F3',
  },
})

export const SwitchInput = styled('input', {
  opacity: 0,
  display: 'none',
  width: 0,
  height: 0,
})

export const SwtichSlider = styled('span', {
  position: 'absolute',
  cursor: 'pointer',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderRadius: '18px',
  background: '$gray100',
  '-webkit-transition': '0.4s',
  transition: '0.4s',

  '&::before': {
    position: 'absolute',
    content: '',
    height: '38px',
    width: '38px',
    borderRadius: '100%',
    left: '0px',
    bottom: '0px',
    background: '$green200',
    '-webkit-transition': '0.4s',
    transition: '0.4s',
  },
})
