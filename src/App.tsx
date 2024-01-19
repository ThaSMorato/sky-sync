import { SwitchUnitMeasuresProvider } from './context/switchUnityMesuresContext'
import { WeatherForecastProvider } from './context/weatherForecastContext'
import { Home } from './pages/Home'

export const App = () => {
  return (
    <SwitchUnitMeasuresProvider>
      <WeatherForecastProvider>
        <Home />
      </WeatherForecastProvider>
    </SwitchUnitMeasuresProvider>
  )
}
