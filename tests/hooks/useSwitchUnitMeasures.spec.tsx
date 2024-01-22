import { render, screen } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'
import { describe, expect, it } from 'vitest'

import { SwitchUnitMeasuresProvider } from '../../src/context/switchUnityMesuresContext'
import { useSwitchUnityMeasures } from '../../src/hooks/useSwitchUnitMeasures'

const TestingComponent = () => {
  const {
    showFahrenheit,
    showMilesPerHour,
    switchTemperatureUnitOfMeasure,
    switchVelocityUnitOfMeasure,
  } = useSwitchUnityMeasures()

  return (
    <>
      <p data-testid="check-temp">{showFahrenheit ? 'F' : 'C'}</p>
      <p data-testid="check-wind">{showMilesPerHour ? 'M' : 'K'}</p>
      <button
        onClick={switchTemperatureUnitOfMeasure}
        data-testid="switch-temp"
      >
        temp
      </button>
      <button onClick={switchVelocityUnitOfMeasure} data-testid="switch-wind">
        wind
      </button>
    </>
  )
}

const sut = () => {
  const element = render(
    <SwitchUnitMeasuresProvider>
      <TestingComponent />
    </SwitchUnitMeasuresProvider>,
  )

  return { element }
}

describe('Switch context and hook', () => {
  it('should start with celcius and K/h', () => {
    sut()

    const temp = screen.getByTestId('check-temp')
    const wind = screen.getByTestId('check-wind')

    expect(temp.textContent).toBe('C')
    expect(wind.textContent).toBe('K')
  })
  it('should switch to F and M/h', () => {
    sut()

    const temp = screen.getByTestId('check-temp')
    const wind = screen.getByTestId('check-wind')

    expect(temp.textContent).toBe('C')
    expect(wind.textContent).toBe('K')

    const tempButton = screen.getByTestId('switch-temp')
    const windButton = screen.getByTestId('switch-wind')

    act(() => {
      tempButton.click()
      windButton.click()
    })

    expect(temp.textContent).toBe('F')
    expect(wind.textContent).toBe('M')
  })
})
