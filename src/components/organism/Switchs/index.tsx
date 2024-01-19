import { Switch } from '@/components/atoms/Switch'
import { Text } from '@/components/atoms/Text'
import { useSwitchUnityMeasures } from '@/hooks/useSwitchUnitMeasures'

import { SwitchsContainer } from './styles'

export const Switchs = () => {
  const { switchTemperatureUnitOfMeasure, switchVelocityUnitOfMeasure } =
    useSwitchUnityMeasures()

  return (
    <SwitchsContainer>
      <div>
        <Text size="titleM" color="hot" font="mono" weight="bold">
          C°
        </Text>
        <Switch onChange={switchTemperatureUnitOfMeasure} />
        <Text size="titleM" color="hot" font="mono" weight="bold">
          F°
        </Text>
      </div>
      <div>
        <Text size="titleM" color="wind" font="mono" weight="bold">
          K/h
        </Text>
        <Switch onChange={switchVelocityUnitOfMeasure} />
        <Text size="titleM" color="wind" font="mono" weight="bold">
          M/h
        </Text>
      </div>
    </SwitchsContainer>
  )
}
