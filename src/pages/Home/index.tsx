import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

import { Button } from '@/components/atoms/Button'
import { Input } from '@/components/atoms/Input'
import { CurrentWeatherCard } from '@/components/organism/CurrentWeatherCard'
import {
  ForecastCards,
  ForecastWeather,
} from '@/components/templates/ForecastCards'
import { CurrentWeather } from '@/dto/weatherDto'
import { useWeatherService } from '@/hooks/useWeatherService'

import { PageContainer } from '../../components/molecules/PageContainer'
import { Header } from '../../components/templates/Header'
import { useGeoLocation } from '../../hooks/useGeoLocation'
import { HomeContent, HomeForm, HomeSubTitle, HomeTitle } from './styles'

interface Coordenates {
  long: number
  lat: number
}

export function Home() {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(
    null,
  )
  const [forecastWeather, setForecastWeather] =
    useState<ForecastWeather | null>(null)
  const [city, setCity] = useState<string>('')

  const { coordenates } = useGeoLocation()

  const { fetchForecastWithCoordenates, fetchForecastWithCity } =
    useWeatherService()

  useEffect(() => {
    const getWeatherThroughCoordenates = async (coord: Coordenates) => {
      try {
        const { forecast, current } = await fetchForecastWithCoordenates(coord)
        setCurrentWeather(current)
        setForecastWeather(forecast)
      } catch (error) {
        console.log(error)
      }
    }
    if (coordenates) {
      getWeatherThroughCoordenates(coordenates)
    }
  }, [coordenates, fetchForecastWithCoordenates])

  const handleOnCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value)
  }

  const handleGetForecastClick = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const { current, forecast } = await fetchForecastWithCity({ city })
      setCurrentWeather(current)
      setForecastWeather(forecast)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Header cityName={currentWeather?.location_name} />
      <PageContainer as="main" pad="noPadTop">
        <HomeContent>
          <HomeTitle color="title" size="titleXL" font="baloo" weight="xbold">
            Discover the real-time weather!
          </HomeTitle>
          <HomeSubTitle
            color="subtitle"
            size="titleM"
            font="baloo"
            weight="bold"
          >
            Plan your day with confidence, be prepared for any weather changes.
          </HomeSubTitle>
          <HomeForm onSubmit={handleGetForecastClick}>
            <Input value={city} onChange={handleOnCityChange} />
            <Button variant="blue">Get Forecast</Button>
          </HomeForm>
          {currentWeather && (
            <CurrentWeatherCard currentWeather={currentWeather} />
          )}
          {forecastWeather && (
            <ForecastCards forecastWeather={forecastWeather} />
          )}
        </HomeContent>
      </PageContainer>
    </>
  )
}
