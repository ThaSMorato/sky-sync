import { Text } from '@/components/atoms/Text'
import { CurrentWeatherContainer } from '@/components/organism/CurrentWeatherCard/styles'
import { styled } from '@/styles'

export const HomeContent = styled('div', {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  flexDirection: 'column',

  [`${CurrentWeatherContainer}`]: {
    marginBottom: '20px',
  },
})

export const HomeTitle = styled(Text, {
  marginTop: '45px',
  marginBottom: '20px',
})

export const HomeSubTitle = styled(Text, {
  marginBottom: '65px',
})

export const HomeForm = styled('form', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '6px',
  marginBottom: '30px',
})
