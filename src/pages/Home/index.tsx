import { ForecastBody } from '@/components/templates/ForecastBody'
import { Header } from '@/components/templates/Header'
import { Hero } from '@/components/templates/Hero'

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <ForecastBody />
    </>
  )
}
