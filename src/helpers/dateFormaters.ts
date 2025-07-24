import { differenceInDays, differenceInMonths, differenceInYears, format, parse } from 'date-fns'

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

export const getAgeDescription = (date: number | undefined, language = 'en'): string | undefined => {
  if (!date) {
    return '-'
  }

  const units =
    language === 'fr'
      ? [
          ['an', 'ans'],
          ['mois', 'mois'],
          ['jour', 'jours'],
        ]
      : language === 'nl'
        ? [
            ['jaar', 'jaar'],
            ['maand', 'maanden'],
            ['dag', 'dagen'],
          ]
        : [
            ['year', 'years'],
            ['month', 'months'],
            ['day', 'days'],
          ]

  const now = new Date()
  const birthDate = new Date(date / 10000, (date % 10000) / 100 - 1, date % 100)

  const years = differenceInYears(now, birthDate)
  if (years !== 0) {
    return `${years} ${units[0][years === 1 ? 0 : 1]}`
  }

  const months = differenceInMonths(now, birthDate)
  if (months !== 0) {
    return `${months} ${units[1][months === 1 ? 0 : 1]}`
  }

  const days = differenceInDays(now, birthDate)
  if (days !== 0) {
    return `${days} ${units[2][days === 1 ? 0 : 1]}`
  }

  return 'just born'
}
