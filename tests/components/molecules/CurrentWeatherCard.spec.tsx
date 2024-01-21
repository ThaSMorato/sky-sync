import { render, screen } from '@testing-library/react'
import React, { ReactNode } from 'react'
import { describe, expect, it, vitest } from 'vitest'

import { CurrentWeatherCard } from '../../../src/components/molecules/CurrentWeatherCard'

interface Temp {
  celcius: number
  fahrenheit: number
}

interface Wind {
  miles: number
  kilometers: number
}

interface CurrentWeather {
  temperature: Temp
  weather_icon: string
  weather_description: string
  wind_speed: Wind
  humidity: number
}

interface CurrentWeatherCardProps {
  currentWeather: CurrentWeather | null
}

vitest.mock(
  '../../../src/components/molecules/CurrentWeatherCard/styles',
  () => {
    const CurrentImageContainerMock = ({
      children,
    }: {
      children: ReactNode
    }) => <div data-testid="image-id">{children}</div>
    const CurrentWeatherContainerMock = ({
      children,
    }: {
      children: ReactNode
    }) => <div data-testid="container-id">{children}</div>
    const CurrentWeatherGridMock = ({ children }: { children: ReactNode }) => (
      <div data-testid="grid-id">{children}</div>
    )

    return {
      CurrentImageContainer: CurrentImageContainerMock,
      CurrentWeatherContainer: CurrentWeatherContainerMock,
      CurrentWeatherGrid: CurrentWeatherGridMock,
    }
  },
)

vitest.mock('../../../src/utils/translateLongDescriptions', () => {
  const translateLongDescriptionsMock = (desc: string) => `translated-${desc}`

  return {
    translateLongDescriptions: translateLongDescriptionsMock,
  }
})
vitest.mock('../../../src/components/molecules/Humidity', () => {
  const HumidityMock = ({ humidity }: { humidity?: number }) => (
    <p data-testid="humidity-id">{humidity}</p>
  )

  return {
    Humidity: HumidityMock,
  }
})
vitest.mock('../../../src/components/molecules/WeatherTemperature', () => {
  const WeatherTemperatureMock = ({ temperature }: { temperature?: Temp }) => (
    <p data-testid="weatherTemperature-id">{temperature?.celcius}</p>
  )

  return {
    WeatherTemperature: WeatherTemperatureMock,
  }
})
vitest.mock('../../../src/components/molecules/WindSpeed', () => {
  const WindSpeedMock = ({ windSpeed }: { windSpeed?: Wind }) => (
    <p data-testid="windSpeed-id">{windSpeed?.kilometers}</p>
  )

  return {
    WindSpeed: WindSpeedMock,
  }
})
vitest.mock('../../../src/components/atoms/Text', () => {
  const TextMock = ({ children }: { children?: ReactNode }) => (
    <p data-testid="text-id">{children}</p>
  )

  return {
    Text: TextMock,
  }
})

const currentWeatherObject = {
  currentWeather: {
    temperature: {
      celcius: 25,
      fahrenheit: 25,
    },
    weather_icon: 'icon.url',
    weather_description: 'a weather',
    wind_speed: {
      miles: 7,
      kilometers: 7,
    },
    humidity: 8,
  },
}

const sut = ({ currentWeather }: CurrentWeatherCardProps) => {
  const element = render(<CurrentWeatherCard currentWeather={currentWeather} />)

  return {
    element,
  }
}

describe('CurrentWeatherCards Component', () => {
  describe('value', () => {
    it('should render the CurrentWeatherCards with the value if passed', () => {
      sut(currentWeatherObject)

      const desc = screen.getByTestId('text-id')
      const temp = screen.getByTestId('weatherTemperature-id')
      const wind = screen.getByTestId('windSpeed-id')
      const humidity = screen.getByTestId('humidity-id')
      const imageComponent = screen.getByTestId('image-id')
      const image = screen.getByAltText('a weather')
      const containerComponent = screen.getByTestId('container-id')
      const gridComponent = screen.getAllByTestId('grid-id')

      expect(desc).toBeInTheDocument()
      expect(desc.textContent).toEqual(expect.stringContaining('translated-'))
      expect(temp).toBeInTheDocument()
      expect(temp.textContent).toEqual(expect.stringContaining('25'))
      expect(wind).toBeInTheDocument()
      expect(wind.textContent).toEqual(expect.stringContaining('7'))
      expect(humidity).toBeInTheDocument()
      expect(humidity.textContent).toEqual(expect.stringContaining('8'))
      expect(image).toBeInTheDocument()
      expect(imageComponent).toBeInTheDocument()
      expect(containerComponent).toBeInTheDocument()
      gridComponent.forEach((grid) => expect(grid).toBeInTheDocument())
    })
  })

  it('should render the CurrentWeatherCards without the value if not passed', () => {
    sut({ currentWeather: null })

    const desc = screen.getByTestId('text-id')
    const temp = screen.getByTestId('weatherTemperature-id')
    const wind = screen.getByTestId('windSpeed-id')
    const humidity = screen.getByTestId('humidity-id')
    const imageComponent = screen.getByTestId('image-id')
    const image = screen.queryByAltText('a weather')
    const containerComponent = screen.getByTestId('container-id')
    const gridComponent = screen.getAllByTestId('grid-id')

    expect(desc).toBeInTheDocument()
    expect(desc.textContent).toBe('- -')
    expect(temp).toBeInTheDocument()
    expect(wind).toBeInTheDocument()
    expect(humidity).toBeInTheDocument()
    expect(image).not.toBeInTheDocument()
    expect(imageComponent).toBeInTheDocument()
    expect(containerComponent).toBeInTheDocument()
    gridComponent.forEach((grid) => expect(grid).toBeInTheDocument())
  })
})
