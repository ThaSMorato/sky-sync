interface WeatherApiErrorProps {
  message: string | undefined
  code: string | undefined
}

export class WeatherApiError extends Error {
  public code: string

  constructor({
    message = 'Internal server error',
    code = '500',
  }: WeatherApiErrorProps) {
    super(message)
    this.code = code
  }
}
