export function kelvinToCelsius(kelvin: number): number {
  const tempInCelcius = kelvin - 273.15;
  return Math.round(tempInCelcius);
}
