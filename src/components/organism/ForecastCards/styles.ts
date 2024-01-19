import { CardContainer } from '@/components/atoms/CardContainer'
import { styled } from '@/styles'

export const ForecastCardsContainer = styled(CardContainer, {
  maxWidth: '1203px',
  padding: '45px',
  gap: '44px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  marginTop: '25px',
})

export const ForecastCardsHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  paddingBottom: '17px',
  borderBottom: '1px solid $gray200',
})

export const ForecastCardsBody = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
})

export const ForecastCardsForecast = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridTemplateRows: '1fr 1fr 1fr',
  gap: '12px',
})
