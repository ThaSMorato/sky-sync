import { render, screen } from '@testing-library/react'
import React, { ChangeEvent, ReactNode } from 'react'
import { describe, expect, it, Mock, vitest } from 'vitest'

import { Switchs } from '../../../src/components/organism/Switchs'
import { useSwitchUnityMeasures } from '../../../src/hooks/useSwitchUnitMeasures'

vitest.mock('../../../src/components/atoms/Text', () => {
  const TextMock = ({ children }: { children?: ReactNode }) => (
    <p data-testid="text-id">{children}</p>
  )

  return {
    Text: TextMock,
  }
})
vitest.mock('../../../src/components/atoms/Switch', () => {
  const SwitchMock = ({
    onChange,
  }: {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  }) => <input type="checkbox" data-testid="switch-id" onChange={onChange} />

  return {
    Switch: SwitchMock,
  }
})

vitest.mock('../../../src/components/organism/Switchs/styles', () => {
  const SwitchsContainerMock = ({ children }: { children?: ReactNode }) => (
    <div data-testid="switchsContainer-id">{children}</div>
  )

  return {
    SwitchsContainer: SwitchsContainerMock,
  }
})

vitest.mock('../../../src/hooks/useSwitchUnitMeasures', () => {
  const useSwitchUnityMeasuresMock = vitest.fn()

  return {
    useSwitchUnityMeasures: useSwitchUnityMeasuresMock,
  }
})

const switchTemperatureUnitOfMeasureMock = vitest.fn()
const switchVelocityUnitOfMeasureMock = vitest.fn()

const mockeduseSwitchUnityMeasures = useSwitchUnityMeasures as Mock

mockeduseSwitchUnityMeasures.mockReturnValue({
  switchTemperatureUnitOfMeasure: switchTemperatureUnitOfMeasureMock,
  switchVelocityUnitOfMeasure: switchVelocityUnitOfMeasureMock,
})

const sut = () => {
  const element = render(<Switchs />)

  return {
    element,
  }
}

describe('CurrentWeatherCards Component', () => {
  describe('render', () => {
    it('should render the CurrentWeatherCards with the value if passed', () => {
      sut()

      const container = screen.getByTestId('switchsContainer-id')
      const texts = screen.getAllByTestId('text-id')
      const switchs = screen.getAllByTestId('switch-id')
      expect(container).toBeInTheDocument()
      texts.forEach((text) => expect(text).toBeInTheDocument())
      switchs.forEach((switchC) => expect(switchC).toBeInTheDocument())
    })
  })
  describe('actions', () => {
    it('should render the CurrentWeatherCards with the value if passed', () => {
      sut()

      const [tempSwitch, windSwitch] = screen.getAllByTestId('switch-id')

      tempSwitch.click()

      expect(switchTemperatureUnitOfMeasureMock).toBeCalled()

      windSwitch.click()

      expect(switchVelocityUnitOfMeasureMock).toBeCalled()
    })
  })
})
