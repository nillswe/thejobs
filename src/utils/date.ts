import { DateTime } from 'luxon'

export const timeElapsed = (date: Date) => {
  const past = DateTime.fromJSDate(date)

  const diffHours = past.diffNow('hours').hours
  const amountHours = Math.trunc(Math.abs(diffHours))

  // Hours
  if (amountHours < 24) {
    if (amountHours == 1) return `${amountHours} hour ago`
    return `${amountHours} hours ago`
  }

  // Days
  const diffDays = past.diffNow('days').days
  const amountDays = Math.trunc(Math.abs(diffDays))

  if (amountDays == 1) return `${amountDays} day ago`
  return `${amountDays} days ago`
}
