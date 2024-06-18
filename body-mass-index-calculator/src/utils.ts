export function round(number: number, decimal: number = 0) {
  return Math.round(number * 10 ** decimal) / 10 ** decimal;
}
