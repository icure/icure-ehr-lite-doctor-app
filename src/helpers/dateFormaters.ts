import { format, parse } from 'date-fns'

export const getNumericDate = (date: Date | number): number => {
  return Number(format(date, 'yyyyMMddHHmmss'))
}

export const formatTimestampToHumanReadable = (timestamp: number | undefined): string | undefined => {
  if (!timestamp) {
    return undefined
  }
  const parsedDate = parse(timestamp.toString(), 'yyyyMMddHHmmss', new Date())
  return format(parsedDate, 'd MMMM yyyy')
}
