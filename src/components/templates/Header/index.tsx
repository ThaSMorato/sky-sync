import { CircleNotch, MagnifyingGlass } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'

import { Text } from '@/components/atoms/Text'
import { SearchForm } from '@/components/molecules/SearchForm'
import { useWeathers } from '@/hooks/useWeathers'

import { PageContainer } from '../../molecules/PageContainer'
import { HeaderContainer } from './styles'

export const Header = () => {
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
    <PageContainer as="header" background="header" pad="noPadTop">
      <HeaderContainer>
        <Text
          size="titleS"
          font="baloo"
          weight="xbold"
          color="logo"
          as="h1"
          spacing="title"
        >
          SkySync
        </Text>
        {error && (
          <Text size="xs" color="hot" font="roboto">
            {error}
          </Text>
        )}
        <SearchForm
          variant="header"
          onInputChange={handleCityNameChange}
          onSubmit={handleSearchCityWeather}
          disabled={isLoading}
        >
          {isLoading ? (
            <CircleNotch size={30} />
          ) : (
            <MagnifyingGlass size={30} />
          )}
        </SearchForm>
      </HeaderContainer>
    </PageContainer>
  )
}
