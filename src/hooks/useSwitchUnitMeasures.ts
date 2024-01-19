import { useContext } from 'react'

import { SwitchUnitMeasuresContext } from '@/context/switchUnityMesuresContext'

export const useSwitchUnityMeasures = () => {
  const context = useContext(SwitchUnitMeasuresContext)

  if (!context) {
    throw new Error('You need to provide a context')
  }

  return context
}
