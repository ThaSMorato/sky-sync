import { CircleNotch, MagnifyingGlass, Warning } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'

import { Text } from '@/components/atoms/Text'
import { SearchForm } from '@/components/molecules/SearchForm'
import { ForecastCards } from '@/components/organism/ForecastCards'
import { Switchs } from '@/components/organism/Switchs'
import { useWeathers } from '@/hooks/useWeathers'

import { PageContainer } from '../../molecules/PageContainer'
import { Footer } from '../Footer'
import {
  ForecastBodyContainer,
  ForecastError,
  ForecastFormContainer,
} from './styles'

export const ForecastBody = () => {
  const [cityName, setCityName] = useState('')

  const { isLoading, error, fetchWeathersByCity } = useWeathers()

  const handleSearchCityWeather = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (cityName.length > 0) {
      await fetchWeathersByCity(cityName)
    }
  }

  const handleCityNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCityName(e.target.value)
  }

  return (
    <PageContainer background="body" pad="noPadTop">
      <ForecastBodyContainer>
        <ForecastFormContainer>
          <SearchForm
            variant="body"
            inputVariant="purple"
            buttonVariant="purple"
            disabled={isLoading}
            onSubmit={handleSearchCityWeather}
            onInputChange={handleCityNameChange}
          >
            {isLoading ? (
              <CircleNotch size={30} />
            ) : (
              <MagnifyingGlass size={30} />
            )}
          </SearchForm>
          {error && (
            <ForecastError>
              <Warning />
              <Text size="xs" color="error" font="roboto">
                {error}
              </Text>
              <Warning />
            </ForecastError>
          )}
        </ForecastFormContainer>
        <Switchs />
        <ForecastCards />
      </ForecastBodyContainer>
      <Footer />
    </PageContainer>
  )
}
