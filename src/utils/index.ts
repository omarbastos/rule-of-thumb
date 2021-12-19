import { Votes } from './interfaces'

export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

export function getPercentage({ positive, negative }: Votes): {
  positive: number
  negative: number
} {
  const total = positive + negative
  if (total === 0) return { positive: 50, negative: 50 }
  const positivePercentage = +((positive / total) * 100).toFixed(2)
  const negativePercentage = +((negative / total) * 100).toFixed(2)
  return { positive: positivePercentage, negative: negativePercentage }
}
export const getImagePath = (image: string) => {
  return `../assets/img/${image}`
}
