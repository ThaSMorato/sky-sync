import { useCallback, useEffect, useState } from 'react'

interface ICoordenates {
  lat: number
  long: number
}

const OPTIONS = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
}

export const useGeoLocation = () => {
  const [coordenates, setCoordenates] = useState<ICoordenates | null>(null)

  const onGetCurrentPosition = (position: GeolocationPosition) => {
    const coords: ICoordenates = {
      lat: position.coords.latitude,
      long: position.coords.longitude,
    }

    setCoordenates(coords)
  }

  const onGetPositionError = (err: GeolocationPositionError) => {
    console.warn(`ERROR(${err.code}): ${err.message}`)
  }

  const attemptToGetPosition = useCallback(() => {
    navigator.geolocation.getCurrentPosition(
      onGetCurrentPosition,
      onGetPositionError,
      OPTIONS,
    )
  }, [])

  useEffect(() => {
    let permissionStatusVar: PermissionStatus

    const handleOnChange = () => {
      if (permissionStatusVar.state === 'granted') {
        attemptToGetPosition()
      }
    }

    if ('geolocation' in navigator) {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then((permissionStatus) => {
          permissionStatusVar = permissionStatus
          if (
            permissionStatusVar.state === 'granted' ||
            permissionStatusVar.state === 'prompt'
          ) {
            attemptToGetPosition()
          }

          permissionStatusVar.addEventListener('change', handleOnChange)
        })
    }

    return () => {
      if (permissionStatusVar) {
        permissionStatusVar.removeEventListener('change', handleOnChange)
      }
    }
  }, [attemptToGetPosition])

  return {
    coordenates,
  }
}
