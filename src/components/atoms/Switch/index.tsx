import { ComponentProps } from 'react'

import { SwitchInput, SwitchWrapper, SwtichSlider } from './styles'

interface SwitchProps
  extends Omit<ComponentProps<typeof SwitchInput>, 'type'> {}

export const Switch = (props: SwitchProps) => {
  return (
    <SwitchWrapper>
      <SwitchInput type="checkbox" {...props} />
      <SwtichSlider data-cy="switch" />
    </SwitchWrapper>
  )
}
