import { useContext } from 'react'

import { SwitchUnitMeasureContextValue, SwitchUnitMeasuresContext } from '@/context/switchUnityMesuresContext'

export const useSwitchUnityMeasures = ():SwitchUnitMeasureContextValue => {
  const context = useContext(SwitchUnitMeasuresContext)

  if (!context) {
    throw new Error('You need to provide a context')
  }

  return context
}
