import { formatEther, parseEther } from 'viem'

export function formatETH(value: string | bigint, decimals: number = 4): string {
  const formatted = formatEther(BigInt(value.toString()))
  return parseFloat(formatted).toFixed(decimals)
}

export function parseETH(value: string): bigint {
  return parseEther(value)
}

export function formatAddress(address: string): string {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

export function formatDate(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function calculateDaysFromDuration(duration: string): number {
  const durationNum = parseInt(duration)
  return durationNum
}

export function formatDuration(days: number): string {
  if (days < 7) {
    return `${days} day${days !== 1 ? 's' : ''}`
  } else if (days < 30) {
    const weeks = Math.floor(days / 7)
    return `${weeks} week${weeks !== 1 ? 's' : ''}`
  } else if (days < 365) {
    const months = Math.floor(days / 30)
    return `${months} month${months !== 1 ? 's' : ''}`
  } else {
    const years = Math.floor(days / 365)
    return `${years} year${years !== 1 ? 's' : ''}`
  }
}

export function calculateInterest(
  principal: string,
  rate: string,
  durationDays: number
): string {
  const principalNum = parseFloat(principal)
  const rateNum = parseFloat(rate) / 100
  const timeInYears = durationDays / 365
  
  const interest = principalNum * rateNum * timeInYears
  return interest.toFixed(6)
}

export function calculateTotalRepayment(
  principal: string,
  rate: string,
  durationDays: number
): string {
  const principalNum = parseFloat(principal)
  const interest = parseFloat(calculateInterest(principal, rate, durationDays))
  
  return (principalNum + interest).toFixed(6)
}
