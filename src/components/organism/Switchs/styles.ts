import { CardContainer } from '@/components/atoms/CardContainer'
import { styled } from '@/styles'

export const SwitchsContainer = styled(CardContainer, {
  maxWidth: '565px',
  maxHeight: '108px',
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '35px',

  div: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',

    '&+div': {
      gap: '8px',
    },
  },

  '&::after': {
    content: '',
    display: 'box',
    position: 'absolute',
    width: '1px',
    height: '50%',
    top: '25%',
    left: 'calc(50% - 0.5px)',
    backgroundColor: '$gray200',
  },
})
