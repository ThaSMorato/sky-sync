import { createContext, ReactNode, useState } from 'react'

export interface SwitchUnitMeasureContextValue {
  switchTemperatureUnitOfMeasure: () => void
  switchVelocityUnitOfMeasure: () => void
  showFahrenheit: boolean
  showMilesPerHour: boolean
}

export const SwitchUnitMeasuresContext =
  createContext<SwitchUnitMeasureContextValue | null>(null)

interface SwitchUnitMeasuresProviderProps {
  children: ReactNode
}

export const SwitchUnitMeasuresProvider = ({
  children,
}: SwitchUnitMeasuresProviderProps) => {
  const [showFahrenheit, setShowFahrenheit] = useState(false)
  const [showMilesPerHour, setShowMilesPerHour] = useState(false)

  const handleSwitchTemperatureUnitOfMeasure = () => {
    setShowFahrenheit((currentValue) => !currentValue)
  }

  const handleSwitchVelocityUnitOfMeasure = () => {
    setShowMilesPerHour((currentValue) => !currentValue)
  }

  return (
    <SwitchUnitMeasuresContext.Provider
      value={{
        showFahrenheit,
        showMilesPerHour,
        switchTemperatureUnitOfMeasure: handleSwitchTemperatureUnitOfMeasure,
        switchVelocityUnitOfMeasure: handleSwitchVelocityUnitOfMeasure,
      }}
    >
      {children}
    </SwitchUnitMeasuresContext.Provider>
  )
}
