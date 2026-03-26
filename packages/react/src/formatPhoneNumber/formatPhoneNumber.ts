/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

/**
 * The 30 two-digit area codes (netnummers) in the Netherlands, which have a 7-digit subscriber number.
 * The three-digit area codes, which have a 6-digit subscriber number, all start with a digit from 1 to 5.
 * @see {@link https://wetten.overheid.nl/BWBR0010198 Nummerplan telefoon- en ISDN-diensten, Bijlage 3}
 */
const twoDigitAreaCodes = new Set([
  '10',
  '13',
  '15',
  '20',
  '23',
  '24',
  '26',
  '30',
  '33',
  '35',
  '36',
  '38',
  '40',
  '43',
  '45',
  '46',
  '50',
  '53',
  '55',
  '58',
  '70',
  '71',
  '72',
  '73',
  '74',
  '75',
  '76',
  '77',
  '78',
  '79',
])

/**
 * Prefixes for businesses and institutions, which are not tied to an area.
 * Like the two-digit area codes, these have a 7-digit subscriber number.
 * @see {@link https://wetten.overheid.nl/BWBR0010198 Nummerplan telefoon- en ISDN-diensten, Bijlage 3}
 */
const nonGeographicPrefixes = new Set(['84', '85', '87', '88', '91'])

/** Whether a string like '020' or '0343' is a Dutch area code, including its leading zero. */
const isAreaCode = (areaCode: string): boolean =>
  areaCode.length === 3 ? twoDigitAreaCodes.has(areaCode.slice(1)) : /^0[1-5]\d{2}$/.test(areaCode)

/**
 * Formats a Dutch phone number according to the City of Amsterdam writing guidelines.
 *
 * Landline numbers with a 2-digit area code: `020 123 4567`.
 * Landline numbers with a 3-digit area code: `0343 255 922`.
 * Numbers for businesses and institutions: `088 123 4567`.
 * Mobile numbers: `06 1234 5678`.
 * International: `+31 20 123 4567` or `+31 6 1234 5678`, with or without the trunk zero.
 * Service numbers: `0800 1234` or `0900 123 4567`.
 * Municipal service numbers: `14 020`.
 *
 * Unrecognised input is returned unchanged, rather than grouped on a guess.
 * Non-string input returns an empty string.
 *
 * @param phoneNumber - A phone number string in any common notation.
 * @returns A formatted phone number string.
 * @example formatPhoneNumber('0201234567')    // '020 123 4567'
 * @example formatPhoneNumber('+31612345678')  // '+31 6 1234 5678'
 * @example formatPhoneNumber('14020')         // '14 020'
 * @see {@link https://www.amsterdam.nl/schrijfwijzer/heldere-taal-basis-onze-huisstijl/tekstonderdelen-heldere-taal/telefoonnummers/ Amsterdam Writing Guide – Telefoonnummers}
 */
export const formatPhoneNumber = (phoneNumber: string): string => {
  if (typeof phoneNumber !== 'string') {
    return ''
  }

  const cleaned = phoneNumber.replace(/[\s\-–—()]/g, '')

  // Municipal service numbers are 14 followed by an area code. They have no international notation.
  const municipal = cleaned.match(/^14(0\d{2,3})$/)

  if (municipal && isAreaCode(municipal[1])) {
    return `14 ${municipal[1]}`
  }

  let nationalDigits: string
  let isInternational = false

  // International notation drops the trunk zero, but it is often written anyway, as in +31 (0)20.
  if (cleaned.startsWith('+31')) {
    nationalDigits = `0${cleaned.slice(3).replace(/^0/, '')}`
    isInternational = true
  } else if (cleaned.startsWith('0031')) {
    nationalDigits = `0${cleaned.slice(4).replace(/^0/, '')}`
    isInternational = true
  } else {
    nationalDigits = cleaned
  }

  // Mobile: 06 + 8 digits. The 066 and 067 ranges are not mobile telephony.
  if (/^06[1-58]\d{7}$/.test(nationalDigits)) {
    const s = nationalDigits.slice(2)
    const formatted = `${s.slice(0, 4)} ${s.slice(4)}`

    return isInternational ? `+31 6 ${formatted}` : `06 ${formatted}`
  }

  // 0800 / 0900 / 0906 / 0909 with 4-digit number (8 digits total)
  if (/^0(?:800|90[069])\d{4}$/.test(nationalDigits)) {
    return `${nationalDigits.slice(0, 4)} ${nationalDigits.slice(4)}`
  }

  // 0800 / 0900 / 0906 / 0909 with 7-digit number (11 digits total)
  if (/^0(?:800|90[069])\d{7}$/.test(nationalDigits)) {
    const s = nationalDigits.slice(4)

    return `${nationalDigits.slice(0, 4)} ${s.slice(0, 3)} ${s.slice(3)}`
  }

  // Standard 10-digit landline: 0 + 9 digits
  if (/^0\d{9}$/.test(nationalDigits)) {
    const prefix = nationalDigits.slice(1, 3)

    // A two-digit area code or a non-geographic prefix: 7-digit subscriber, grouped as 3 + 4
    if (twoDigitAreaCodes.has(prefix) || nonGeographicPrefixes.has(prefix)) {
      const s = nationalDigits.slice(3)
      const formatted = `${s.slice(0, 3)} ${s.slice(3)}`

      return isInternational ? `+31 ${prefix} ${formatted}` : `0${prefix} ${formatted}`
    }

    const areaCode = nationalDigits.slice(1, 4)

    // A three-digit area code: 6-digit subscriber, grouped as two equal groups of 3
    if (/^[1-5]/.test(areaCode)) {
      const s = nationalDigits.slice(4)
      const formatted = `${s.slice(0, 3)} ${s.slice(3)}`

      return isInternational ? `+31 ${areaCode} ${formatted}` : `0${areaCode} ${formatted}`
    }
  }

  return phoneNumber
}
